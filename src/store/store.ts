import productsReducer from "./products/products.slice";
import productReducer from "./product/product.slice";
import cartReducer from "./cart/cart.slice";
import wishListReducer from "./wish-list/wish-list.slice";
import sizeReducer from "./size/size.slice";
import accountReducer from "./account/account.slice";
import navReducer from "./nav/nav.slice";

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
// 	key: "root",
// 	storage,
// 	blacklist: ["account"],
// };

// const persistedReducer = per

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;