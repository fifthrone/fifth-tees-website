import { createSlice } from "@reduxjs/toolkit";
import { selectUser } from "../account/account.slice";

import { setFirestoreUserSubcollection } from "../../utils/firebase/firebase.utils";

const initialState = {
	items: [],
	isOpen: false,
};

export const wishListSlice = createSlice({
	name: "wishList",
	initialState,
	reducers: {
		toggleWishList: (state) => {
			state.isOpen = !state.isOpen;
		},
		closeWishListTab: (state) => {
			state.isOpen = false;
		},
		setWishListItems: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { toggleWishList, setWishListItems, closeWishListTab } = wishListSlice.actions;

export const selectWishListItems = (state) => state.wishList.items;

export const selectWishListItemIds = (state) =>
	state.wishList.items.map((item) => item.id);

export const selectWishListIsOpen = (state) => state.wishList.isOpen;

export const addWishListItems = (item) => (dispatch, getState) => {
	const currentItems = selectWishListItems(getState());

	const existingItem = currentItems.find(
		(currentItem) => currentItem.id === item.id
	);

	existingItem
		? dispatch(setWishListAndFirestoreWishListItems(currentItems))
		: dispatch(setWishListAndFirestoreWishListItems([item, ...currentItems]));
};

export const removeWishListItems = (item) => (dispatch, getState) => {
	const currentItems = selectWishListItems(getState());

	const newItems = currentItems.reduce(
		(acc, currentItem) =>
			currentItem.id === item.id ? acc : [...acc, currentItem],
		[]
	);

	dispatch(setWishListAndFirestoreWishListItems(newItems));
};

export const clearWishListItems = () => (dispatch) => {
	dispatch(setWishListAndFirestoreWishListItems([]));
};

export const setWishListAndFirestoreWishListItems =
	(items) => async (dispatch, getState) => {
		dispatch(setWishListItems(items));

		const currentUser = selectUser(getState());
		// console.log("currenUser", currentUser);
		if (currentUser) {
			// console.log("currenUser", currentUser);
			const currentItems = selectWishListItems(getState());
			const lastUpdatedAt = new Date();

			const userWishListItems = currentItems.map((item) => {
				return {
					id: item.id,
					lastUpdatedAt,
				};
			});

			setFirestoreUserSubcollection(currentUser.uid, "wishList", userWishListItems)
		}
	};

export default wishListSlice.reducer;
