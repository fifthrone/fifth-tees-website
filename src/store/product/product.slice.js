import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

import { getData, getProduct } from "../../utils/firebase/firebase.utils";

const initialState = {
	product: {},
	isLoading: false,
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		fetchProductStart: (state) => {
			state.isLoading = true;
		},
		fetchProductSuccess: (state, action) => {
			(state.isLoading = false), (state.product = action.payload);
		},
		fetchProductFail: (state, action) => {
			(state.isLoading = false), (state.error = action.payload);
		},
	},
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFail } = productSlice.actions;

export const fetchProductAsync = (id) => async (dispatch, getState) => {
    const products = store.getState().products.products
    console.log(products)
    const product = products.find((product) => id === product.id);
    console.log(product)
	// return filtered ? filtered : undefined;

	if (product) {
        console.log("before")
		dispatch(fetchProductSuccess(product));
        console.log("after")
	} else {
		dispatch(fetchProductStart);
		try {
			const fetchProduct = await getProduct(id);
			dispatch(fetchProductSuccess(fetchProduct[0]));
		} catch (error) {
			dispatch(fetchProductFail(error));
			console.log("fail to fetch products", error);
		}
	}
};

export const clearProduct = () => (dispatch, getState) => {
    dispatch(fetchProductSuccess(null))
}

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
