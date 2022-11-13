import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/products.slice";
import productReducer from "./product/product.slice";
import cartReducer from "./cart/cart.slice";
import wishListReducer from "./wish-list/wish-list.slice";
import sizeReducer from "./size/size.slice";
import accountReducer from "./account/account.slice";
import navReducer from "./nav/nav.slice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		product: productReducer,
		cart: cartReducer,
		wishList: wishListReducer,
		size: sizeReducer,
		account: accountReducer,
		nav: navReducer,
	},
});
