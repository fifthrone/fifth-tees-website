"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import FormInput from "../form-input/form-input";

import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Link from "next/link";

import {
	closeAccountTab,
	selectUser,
	openAccountTab,
} from "../../store/account/account.slice";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const pathname = usePathname();

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const res = await signInWithGooglePopup();
		console.log(res);
		if (pathname === "/account") {
			console.log("redirect trigger");
			router.back();
			dispatch(openAccountTab());
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			console.log("user sign in failed", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="w-full flex flex-col space-y-3">
			<h2 className="font-bold text-xl">
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
				<div className="flex flex-col space-y-4">
					<button className="p-2 bg-black rounded-xl text-white" type="submit">
						Sign In
					</button>
					<div className="flex flex-row items-center space-x-2">
						<hr className="w-full border-gray-300" />
						<p className="text-gray-400 text-sm">or</p>
						<hr className="w-full border-gray-300" />
					</div>

					<button
						className="p-3 bg-black rounded-xl text-white flex flex-row items-center justify-center space-x-3"
						type="button"
						onClick={signInWithGoogle}
					>
						<img className="h-5" src="googleLogo.png" alt="G" />
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
