import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: "",
};

const searchReducer = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
	},
});

export const {} = searchReducer.actions;

export default searchReducer.reducer;
