import cartReducer from "./cart/cart.slice";
import wishListReducer from "./wish-list/wish-list.slice";
import sizeReducer from "./size/size.slice";
import accountReducer from "./account/account.slice";
import navReducer from "./nav/nav.slice";
import tagReducer from "./tag/tag.slice";

import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
} from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
	key: "root",
	storage,
	blacklist: ["account"],
};

const accountPersistConfig = {
	key: "account",
	storage: storage,
	blacklist: ["user"],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	wishList: wishListReducer,
	size: sizeReducer,
	account: persistReducer(accountPersistConfig, accountReducer),
	nav: navReducer,
	tag: tagReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			
		}),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
