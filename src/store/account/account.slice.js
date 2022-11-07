import { createSlice } from "@reduxjs/toolkit";

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
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { toggleAccount, setUser } = accountSlice.actions;

export const selectAccountIsOpen = (state) => state.account.accountIsOpen;

export const selectUser = (state) => state.account.user;

export default accountSlice.reducer;
