import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SET_ERROR_STATUS, SET_LOADING_STATUS } from "../actions";

export interface Status {
	isLoading: boolean;
	error: string;
}

const initialState: Status = {
	isLoading: true,
	error: "",
};

// const statusReducer = (
// 	state = initialState,
// 	{ type, payload }: { type: string; payload: Status },
// ) => {
// 	switch (type) {
// 		case SET_LOADING_STATUS:
// 			return { ...state, isLoading: payload };

// 		case SET_ERROR_STATUS:
// 			return { ...state, error: payload };

// 		default:
// 			return state;
// 	}
// };

const statusReducer = createSlice({
	name: "status",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setLoadingStatus: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setErrorStatus: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	},
});

export const { setLoadingStatus, setErrorStatus } = statusReducer.actions;
export default statusReducer.reducer;
