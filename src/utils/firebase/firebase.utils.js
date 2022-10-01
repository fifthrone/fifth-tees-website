import { initializeApp } from "firebase/app";
import {
	getFirestore,
	getDocs,
	collection,
	query,
	writeBatch,
	doc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyADNUj1PrxpM073Hjtic4BhOJOcF1mcTeM",
	authDomain: "fifth-tees.firebaseapp.com",
	projectId: "fifth-tees",
	storageBucket: "fifth-tees.appspot.com",
	messagingSenderId: "979434357378",
	appId: "1:979434357378:web:0c7590c3b5a5df87d72a9b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

export const getProducts = async () => {
	const collectionRef = collection(db, "products");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const productsMap = querySnapshot.docs.map((docSnapshot) =>
		docSnapshot.data()
	);

	return productsMap;
};
