import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	getDocs,
	setDoc,
	collection,
	query,
	where,
	writeBatch,
	doc,
} from "firebase/firestore";
import { ALL_PRODUCTS, FEATURED, HERO } from "../../products-data";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

const productRef = collection(db, "products");

export const addProduct = async () => {
	for (const product of ALL_PRODUCTS) {
		await setDoc(doc(productRef, product.id), product);
	}
};
export const addHero = async () => {
	HERO.forEach(async (item, index) => {
		await setDoc(doc(collection(db, "hero"), index.toString()), item);	
	});
};

export const addFeatured = async () => {
	FEATURED.forEach(async (item, index) => {
		await setDoc(doc(collection(db, "featured"), index.toString()), item);	
	});
};

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

export const getData = async (collectionKey) => {
	const collectionRef = collection(db, collectionKey);
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	return data;
};
export const getProduct = async (id) => {
	const productRef = collection(db, "products");
	const q = query(productRef, where("id", "==", id));

	const querySnapshot = await getDocs(q);
	const product = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	return product;
};

// export const getProducts = async () => {
// 	const collectionRef = collection(db, "products");
// 	const q = query(collectionRef);

// 	const querySnapshot = await getDocs(q);
// 	const productsMap = querySnapshot.docs.map((docSnapshot) =>
// 		docSnapshot.data()
// 	);

// 	return productsMap;
// };
