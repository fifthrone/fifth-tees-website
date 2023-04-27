import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

const initialState = {
	size: "M",
};

const sizeSlice = createSlice({
	name: "size",
	initialState,
	reducers: {
		setSize: (state, action) => {
			state.size = action.payload;
		},
	},
});

export const { setSize } = sizeSlice.actions;

export const selectSize = (state: RootState) => state.size.size;

export const resetSize = () => (dispatch: AppDispatch) => {
	dispatch(setSize("M"));
};

export default sizeSlice.reducer;
