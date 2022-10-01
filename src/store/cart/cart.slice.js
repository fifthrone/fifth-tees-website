import { createSlice } from "@reduxjs/toolkit";

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
		setItems: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { toggleCart, setItems } = cartSlice.actions;

export const selectIsOpen = (state) => state.cart.isOpen;

export const selectItems = (state) => state.cart.items;

export const selectTotalPrice = (state) => {
	const allItems = state.cart.items;

	const totalPrice = allItems.reduce(
		(acc, currentItem) => acc + currentItem.price * currentItem.qty,
		0
	);

    return totalPrice
};

export const addItems = (item) => (dispatch, getState) => {
	const currentItems = selectItems(getState());

	const existingItem = currentItems.find(
		(currentItem) => currentItem.id === item.id
	);

	console.log(existingItem);

	if (existingItem) {
		const newItems = currentItems.map((currentItem) =>
			currentItem.id === item.id
				? { ...currentItem, qty: currentItem.qty + 1 }
				: currentItem
		);
		dispatch(setItems(newItems));
		return;
	}

	const newItems = [...currentItems, item];
	dispatch(setItems(newItems));
	return;
};

export const removeItems = (item) => (dispatch, getState) => {
	const currentItems = selectItems(getState());

	const newItems = currentItems.reduce(
		(acc, currentItem) =>
			currentItem.id === item.id
				? currentItem.qty === 1
					? acc
					: [...acc, { ...currentItem, qty: currentItem.qty - 1 }]
				: [...acc, currentItem],
		[]
	);

	dispatch(setItems(newItems));
};

export const clearItems = () => (dispatch) => {
	dispatch(setItems([]));
};

export default cartSlice.reducer;
