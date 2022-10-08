import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getData } from "../../utils/firebase/firebase.utils";

const initialState = {
	products: [],
	hero: [],
	featured: [],
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
		fetchProductsSuccess: (state, action) => {
			(state.isLoading = false), (state.products = action.payload);
		},
		fetchHeroSuccess: (state, action) => {
			(state.isLoading = false), (state.hero = action.payload);
		},
		fetchFeaturedSuccess: (state, action) => {
			(state.isLoading = false), (state.featured = action.payload);
		},
		fetchFail: (state, action) => {
			(state.isLoading = false), (state.error = action.payload);
		},
	},
});

export const {
	fetchStart,
	fetchProductsSuccess,
	fetchHeroSuccess,
	fetchFeaturedSuccess,
	fetchFail,
} = productsSlice.actions;

export const fetchProductsAsync = () => async (dispatch, getState) => {
	dispatch(fetchStart);
	try {
		const products = await getData("product");
		console.log("fetch reducer", products);
		dispatch(fetchProductsSuccess(products));
	} catch (error) {
		dispatch(fetchFail(error));
		console.log("fail to fetch products", error);
	}
};

export const fetchAllAsync = () => async (dispatch) => {
	dispatch(fetchStart);
	try {
		const products = getData("product");
		const hero = getData("hero");
		const featured = getData("featured");
		const results = await Promise.all([products, hero, featured]);
		dispatch(fetchProductsSuccess(results[0]));
		dispatch(fetchHeroSuccess(results[1]));
		dispatch(fetchFeaturedSuccess(results[2]));
	} catch (error) {
		dispatch(fetchFail(error));
		console.log("fail to fetch", error);
	}
};

export const selectIsLoading = (state) => state.products.isLoading;

export const selectProducts = (state) => state.products.products;

export const selectTShirts = (state) =>
	state.products.products.filter((product) => product.type === "T-Shirt");

export const selectStickers = (state) =>
	state.products.products.filter((product) => product.type === "Sticker");

export const selectProductById = (id) => (state) => {
	const filtered = state.products.products.find((product) => id === product.id);
	// const filtered = state.products.products.filter((product) => id === product.id);
	return filtered ? filtered : {};
};

export const selectHero = (state) => {
	return state.products.hero.map(({ title, productIds }) => {
		const product = {
			title,
			products: productIds.map((productId) => {
				return state.products.products.find(
					(product) => product.id === productId
				);
			}),
		};
		return product;
	});
};
export const selectFeatured = (state) => {
	return state.products.featured.map(({ title, productIds }) => {
		const product = {
			title,
			products: productIds.map((productId) => {
				return state.products.products.find(
					(product) => product.id === productId
				);
			}),
		};
		return product;
	});
};
// export const selectProductsMap = (state) =>
// 	state.products.products.reduce((acc, product) => {
// 		console.log("selector", product)
// 		const { title, items } = product;
// 		acc[title] = items;
// 		return acc;
// 	}, {});

export default productsSlice.reducer;
