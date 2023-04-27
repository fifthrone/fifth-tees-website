import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

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

export const selectTag = (state: RootState) => state.tag.tag;

export const resetTag = (): AppThunk => (dispatch) => {
	dispatch(setTag(""));
};

export default tagSlice.reducer;
