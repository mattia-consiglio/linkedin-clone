import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import statusReducer from "../reducers/status";
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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
