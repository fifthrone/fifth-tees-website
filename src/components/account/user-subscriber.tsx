"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
	getDisplayName,
} from "../../utils/firebase/firebase.utils";

import { setUser } from "../../store/account/account.slice";

const UserSubscriber = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				createUserDocumentFromAuth(user);
				const displayName = await getDisplayName(user.uid);
				dispatch(setUser({ displayName: displayName, uid: user.uid }));
			} else {
				dispatch(setUser(null));
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return <>{children}</>;
};

export default UserSubscriber;
