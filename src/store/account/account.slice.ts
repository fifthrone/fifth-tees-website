import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	accountIsOpen: false,
	user: null,
};

const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		toggleAccount: (state) => {
			state.accountIsOpen = !state.accountIsOpen;
		},
		openAccountTab: (state) => {
			state.accountIsOpen = true;
		},
		closeAccountTab: (state) => {
			state.accountIsOpen = false;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { toggleAccount, openAccountTab, closeAccountTab, setUser } =
	accountSlice.actions;

export const selectAccountIsOpen = (state: RootState) =>
	state.account.accountIsOpen;

export const selectUser = (state: RootState) => state.account.user;

export default accountSlice.reducer;
