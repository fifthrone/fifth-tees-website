import { createSlice } from "@reduxjs/toolkit";
import { setItems } from "../cart/cart.slice";

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
		? dispatch(setWishListItems(currentItems))
		: dispatch(setWishListItems([item, ...currentItems]));
};

export const removeWishListItems = (item) => (dispatch, getState) => {
	const currentItems = selectWishListItems(getState());

	const newItems = currentItems.reduce(
		(acc, currentItem) =>
			currentItem.id === item.id ? acc : [...acc, currentItem],
		[]
	);

	dispatch(setWishListItems(newItems));
};

export const clearWishListItems = () => (dispatch) => {
	dispatch(setWishListItems([]));
};

export default wishListSlice.reducer;
