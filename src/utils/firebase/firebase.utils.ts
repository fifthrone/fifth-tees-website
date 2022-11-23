import { initializeApp } from "firebase/app";
import {
	getFirestore,
	getDoc,
	getDocs,
	setDoc,
	collection,
	query,
	where,
	writeBatch,
	doc,
	runTransaction,
	deleteDoc,
} from "firebase/firestore";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import { ALL_PRODUCTS, FEATURED, HERO } from "../../products-data";

import { debounce } from "../common.utils";

import { Product } from "../../ts/types";

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
	collectionKey: string,
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

export const getData = async (collectionKey: string) => {
	const collectionRef = collection(db, collectionKey);
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	return data;
};
export const getProduct = async (id: string): Promise<Product> => {
	const productRef = collection(db, "products");
	const q = query(productRef, where("id", "==", id));

	const querySnapshot: any = await getDocs(q);
	const products: Product[] = querySnapshot.docs.map((docSnapshot) =>
		docSnapshot.data()
	);

	return products[0];
};

export const getProducts = async (ids: string) => {
	const productRef = collection(db, "products");
	const q = query(productRef, where("id", "in", ids));

	const querySnapshot = await getDocs(q);
	const products = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	return products;
};

export const getProductsByType = async (type: string) => {
	const productRef = collection(db, "products");
	const q = query(productRef, where("type", "==", type));

	const querySnapshot = await getDocs(q);
	const products = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	return products;
};

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
	const result = await signInWithPopup(auth, googleProvider);
	const user = result.user;
	return user;
};

export const signInWithGoogleRedirect = async () =>
	signInWithRedirect(auth, googleProvider);

//user cart
export const setFirestoreUserSubcollection = debounce(
	async (userUid, subcollectionKey, items) => {
		try {
			const userSubcollectionSnapshot = await getDocs(
				collection(db, `users/${userUid}/${subcollectionKey}`)
			);

			userSubcollectionSnapshot.forEach(async (subcollectionDoc) => {
				await deleteDoc(
					doc(db, "users", userUid, subcollectionKey, subcollectionDoc.id)
				);
			});

			items.forEach(async (item) => {
				const itemId = `${item.id}-${item.size}`;

				await setDoc(doc(db, "users", userUid, subcollectionKey, itemId), item);
			});

			console.log("clear successfully committed!");
		} catch (e) {
			console.log("clear failed: ", e);
		}
	}
);

export const getFirestoreUserSubcollection = async (userUid, subcollectionKey) => {
	try {
		const userSubcollectionSnapshot = await getDocs(
			collection(db, `users/${userUid}/${subcollectionKey}`)
		);
		const userSubcollectionItems = userSubcollectionSnapshot.docs.map((docSnapshot) =>
			docSnapshot.data()
		);

		return userSubcollectionItems;
	} catch (e) {
		console.log("get items fails: ", e);
	}
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	const userCredential = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);
	const user = userCredential.user;

	return user;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
