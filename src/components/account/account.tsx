"use client";

import { useSelector, useDispatch } from "react-redux";

import {
	toggleAccount,
	selectUser,
	closeAccountTab,
} from "../../store/account/account.slice";

import { useRef, useEffect } from "react";

import Link from "next/link";
import SignInForm from "../sign-in-form/sign-in-form";
import SignUpForm from "../sign-up-form/sign-up-form";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Account = (props) => {
	const { accountButtonRef, themeButtonRef } = props;

	const ref = useRef(null);
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!accountButtonRef.current.contains(event.target) &&
				!themeButtonRef.current.contains(event.target)
			) {
				// alert("You clicked outside of me!");
				dispatch(closeAccountTab());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, accountButtonRef, dispatch, themeButtonRef]);

	return (
		<>
			<div
				className="md:w-96 max-w-xs max-h-[calc(100vh-6rem)] overflow-scroll scrollbar-hide rounded-xl"
				ref={ref}
			>
				<div className="flex items-center justify-center flex-col space-y-8 p-6">
					{user ? (
						<div className="font-semibold text-lg">
							Welcome! {user.displayName}
						</div>
					) : null}
					{user ? (
						<button
							onClick={() => {
								signOutUser();
							}}
							className="w-full text-red-400 hover:underline"
						>
							Sign Out
						</button>
					) : (
						<>
							<SignInForm />
							{/* <SignUpForm /> */}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Account;
