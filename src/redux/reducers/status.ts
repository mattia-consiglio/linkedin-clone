import { SET_ERROR_STATUS, SET_LOADING_STATUS } from "../actions";

export interface Status {
	isLoading: boolean;
	error: string;
}

const initialState: Status = {
	isLoading: true,
	error: "",
};

const statusReducer = (
	state = initialState,
	{ type, payload }: { type: string; payload: any },
) => {
	switch (type) {
		case SET_LOADING_STATUS:
			return { ...state, isLoading: payload };

		case SET_ERROR_STATUS:
			return { ...state, error: payload };

		default:
			return state;
	}
};

export default statusReducer;
