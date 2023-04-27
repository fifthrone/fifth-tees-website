import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	// clearUserCart,
	// updateUserCart,
	setFirestoreUserSubcollection,
} from "../../utils/firebase/firebase.utils";
import { selectUser } from "../account/account.slice";
import { AppDispatch, AppThunk, RootState } from "../store";
import { CartItem, Product } from "../../ts/types";
import App from "next/app";

const initialState = {
	isOpen: false,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.isOpen = !state.isOpen;
		},
		openCart: (state) => {
			state.isOpen = true;
		},
		closeCart: (state) => {
			state.isOpen = false;
		},
		setItems: (state, action: PayloadAction<CartItem[]>) => {
			state.items = action.payload;
		},
	},
});

export const { toggleCart, openCart, closeCart, setItems } = cartSlice.actions;

export const selectIsOpen = (state: RootState) => state.cart.isOpen;

export const selectItems = (state: RootState) => state.cart.items;

export const selectTotalPrice = (state: RootState) => {
	const allItems = state.cart.items;

	const totalPrice = allItems.reduce(
		(acc, currentItem) => acc + currentItem.price * currentItem.qty,
		0
	);

	return totalPrice;
};
export const selectItemsCount = (state: RootState) => {
	const allItems = state.cart.items;

	const count = allItems.reduce((acc, currentItem) => acc + currentItem.qty, 0);

	return count;
};

export const addItems =
	(item: CartItem): AppThunk =>
	(dispatch, getState) => {
		const currentItems = selectItems(getState());

		const existingItem = currentItems.find(
			(currentItem) =>
				currentItem.id === item.id && currentItem.size === item.size
		);

		console.log(existingItem);

		if (existingItem) {
			const newItems = currentItems.map((currentItem) =>
				currentItem.id === item.id && currentItem.size === item.size
					? { ...currentItem, qty: currentItem.qty + 1 }
					: currentItem
			);
			dispatch(setCartAndFirestoreCartItems(newItems));
			return;
		}

		const newItems = [...currentItems, item];
		dispatch(setCartAndFirestoreCartItems(newItems));
		return;
	};

export const removeItems =
	(item: CartItem): AppThunk =>
	(dispatch, getState) => {
		const currentItems = selectItems(getState());

		const newItems = currentItems.reduce(
			(acc, currentItem) =>
				currentItem.id === item.id && currentItem.size === item.size
					? currentItem.qty === 1
						? acc
						: [...acc, { ...currentItem, qty: currentItem.qty - 1 }]
					: [...acc, currentItem],
			[]
		);

		dispatch(setCartAndFirestoreCartItems(newItems));
	};

export const clearItems = (): AppThunk => (dispatch) => {
	dispatch(setCartAndFirestoreCartItems([]));
};

export const setCartAndFirestoreCartItems =
	(items): AppThunk =>
	async (dispatch, getState) => {
		dispatch(setItems(items));

		const currentUser = selectUser(getState());
		// console.log("currenUser", currentUser);
		if (currentUser) {
			// console.log("currenUser", currentUser);
			const currentItems = selectItems(getState());
			const lastUpdatedAt = new Date();

			const userCartItems = currentItems.map((item) => {
				return {
					id: item.id,
					size: item.size,
					qty: item.qty,
					lastUpdatedAt,
				};
			});

			setFirestoreUserSubcollection(currentUser.uid, "cart", userCartItems);
		}
	};

export default cartSlice.reducer;
