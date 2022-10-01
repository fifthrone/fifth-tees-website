import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "../../utils/firebase/firebase.utils";

const initialState = {
	products: [],
	isLoading: false,
	error: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.isLoading = true;
		},
		fetchSuccess: (state, action) => {
			(state.isLoading = false), (state.products = action.payload);
		},
		fetchFail: (state, action) => {
			(state.isLoading = false), (state.error = action.payload);
		},
	},
});

export const { fetchStart, fetchSuccess, fetchFail } = productsSlice.actions;

export const fetchProductsAsync = () => async (dispatch, getState) => {
	dispatch(fetchStart);
	try {
		const productsMap = await getProducts();
		dispatch(fetchSuccess(productsMap));
	} catch (error) {
		dispatch(fetchFail(error));
		console.log(error);
	}
};

export const selectIsLoading = (state) => state.products.isLoading;
export const selectProductsMap = (state) =>
	state.products.products.reduce((acc, product) => {
		const { title, items } = product;
		acc[title] = items;
		return acc;
	}, {});

export default productsSlice.reducer;
