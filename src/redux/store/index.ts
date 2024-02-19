import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer, { Profile } from "../reducers/profile";
import statusReducer, { Status } from "../reducers/status";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// export interface RootState {
// 	profile: Profile;
// 	status: Status;
// }

const rootStore = combineReducers({
	profile: profileReducer,
	status: statusReducer,
});

const store = configureStore({
	reducer: rootStore,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
