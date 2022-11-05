import { createSlice } from "@reduxjs/toolkit";

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

export const selectSize = (state) => state.size.size;

export const resetSize = () => (dispatch) => {
	dispatch(setSize("M"));
};

export default sizeSlice.reducer;
