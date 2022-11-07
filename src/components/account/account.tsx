"use client";

import { useSelector, useDispatch } from "react-redux";

import { toggleAccount, selectUser } from "../../store/account/account.slice";

import { useRef, useEffect } from "react";

import Link from "next/link";
import SignInForm from "../sign-in-form/sign-in-form";
import SignUpForm from "../sign-up-form/sign-up-form";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Account = (props) => {
	const { accountButtonRef } = props;

	const ref = useRef(null);
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!accountButtonRef.current.contains(event.target)
			) {
				// alert("You clicked outside of me!");
				dispatch(toggleAccount());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div ref={ref}>
			<div className="flex items-center justify-center flex-col space-y-8 p-4">
				{user ? <div>Hi! {user}</div> : null}
				{user ? (
					<button
						onClick={() => {
							signOutUser();
						}}
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
	);
};

export default Account;
