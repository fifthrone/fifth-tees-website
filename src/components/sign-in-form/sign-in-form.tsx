"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";

import FormInput from "../form-input/form-input";

import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	getFirestoreUserSubcollection,
	getProduct,
} from "../../utils/firebase/firebase.utils";
import Link from "next/link";

import {
	closeAccountTab,
	selectUser,
	openAccountTab,
} from "../../store/account/account.slice";
import { addItems } from "../../store/cart/cart.slice";
import { addWishListItems } from "../../store/wish-list/wish-list.slice";

import { useAppDispatch } from "../../store/hook";

const defaultFormFields = {
	email: "",
	password: "",
};
const demoFormFields = {
	email: "demo.fifth.tees@gmail.com",
	password: "Abcd1234",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const appDispatch = useAppDispatch();

	const router = useRouter();
	const pathname = usePathname();

	const [formFields, setFormFields] = useState(demoFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const updateCartAndWishListOnSignIn = async (userUid) => {
		const userCartItems = await getFirestoreUserSubcollection(userUid, "cart");
		const userWishListItems = await getFirestoreUserSubcollection(
			userUid,
			"wishList"
		);

		userCartItems.forEach(async (item) => {
			//compare first
			//useSelector(selectItems)

			const itemDetails = await getProduct(item.id);

			const cartItem = {
				...itemDetails,
				size: item.size,
				qty: item.qty,
			};

			appDispatch(addItems(cartItem));
		});

		userWishListItems.forEach(async (item) => {
			//compare first

			const itemDetails = await getProduct(item.id);

			const wishListItem = {
				...itemDetails,
			};

			appDispatch(addWishListItems(wishListItem));
		});
	};

	const signInWithGoogle = async () => {
		try {
			const user = await signInWithGooglePopup();

			updateCartAndWishListOnSignIn(user.uid);

			if (pathname === "/account") {
				console.log("redirect trigger");
				router.back();
				dispatch(openAccountTab());
			}
		} catch (error) {
			console.log("user sign in failed", error);
			alert("An error occured during sign in, please try again");

		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const user = await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();

			updateCartAndWishListOnSignIn(user.uid);

			if (pathname === "/account") {
				console.log("redirect trigger");
				router.back();
				dispatch(openAccountTab());
			}
		} catch (error) {
			console.log("user sign in failed", error);
			if (error.code === "auth/wrong-password") {
				alert("Incorrect email or password");
			} else if (error.code === "auth/user-not-found") {
				alert("Incorrect email or password");
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="w-full flex flex-col space-y-3">
			<h2 className="font-bold text-xl text-black dark:text-white">
				Got an Account? Sign in to view your saved products
			</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="flex flex-col space-y-2">
					<button className="p-2 bg-black rounded-xl text-white" type="submit">
						Sign In
					</button>
					<button
						className="p-2 bg-green-400 rounded-xl text-green-800 font-semibold"
						type="submit"
					>
						Demo Sign In
					</button>
					<div className="flex flex-row items-center space-x-2 py-2">
						<hr className="w-full border-gray-300" />
						<p className="text-gray-400 text-sm">or</p>
						<hr className="w-full border-gray-300" />
					</div>

					<button
						className="p-3 bg-black rounded-xl text-white flex flex-row items-center justify-center space-x-3"
						type="button"
						onClick={signInWithGoogle}
					>
						<Image
							className="h-5 w-auto"
							src="/googleLogo.png"
							alt="G"
							width={50}
							height={50}
						/>
						<p>Sign In With Google</p>
					</button>
				</div>
				<div>
					<Link
						href="/account"
						className="text-center text-sm text-blueGray dark:text-blue-200 hover:underline pt-6"
						onClick={() => {
							dispatch(closeAccountTab());
						}}
					>
						Don&apos;t have an account? Sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
