"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { setUser } from "../../store/account/account.slice";

const UserSubscriber = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
				console.log(user);
				dispatch(setUser({ displayName: user.displayName, uid: user.uid }));
			} else {
				dispatch(setUser(null));
			}
		});

		return unsubscribe;
	}, []);

	return <>{children}</>;
};

export default UserSubscriber;
