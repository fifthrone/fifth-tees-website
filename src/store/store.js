import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './products/products.slice';
import cartReducer from './cart/cart.slice';
import wishListReducer from "./wish-list/wish-list.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishList: wishListReducer,
  },
});
