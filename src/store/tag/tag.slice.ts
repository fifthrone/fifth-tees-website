import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tag: "",
};

const tagSlice = createSlice({
	name: "tag",
	initialState,
	reducers: {
		setTag: (state, action) => {
			state.tag = action.payload;
		},
	},
});

export const { setTag } = tagSlice.actions;

export const selectTag = (state) => state.tag.tag;

export const resetTag = () => (dispatch) => {
	dispatch(setTag(""));
};

export default tagSlice.reducer;
