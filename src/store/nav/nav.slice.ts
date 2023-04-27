import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	isMobileNavTabOpen: false,
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		toggleMobileNavTab: (state) => {
			state.isMobileNavTabOpen = !state.isMobileNavTabOpen;
		},
		openMobileNavTab: (state) => {
			state.isMobileNavTabOpen = true;
		},
		closeMobileNavTab: (state) => {
			state.isMobileNavTabOpen = false;
		},
	},
});

export const { toggleMobileNavTab, openMobileNavTab, closeMobileNavTab } =
	navSlice.actions;

export const selectIsMobileNavTabOpen = (state: RootState) =>
	state.nav.isMobileNavTabOpen;

export default navSlice.reducer;
