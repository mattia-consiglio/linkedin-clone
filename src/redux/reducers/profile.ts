import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, Experience } from "../../intefaces";
// import { SET_USER, SET_USER_IMAGE } from "../actions";

export interface Profile {
	me: User;
	tokens: string[];
	currentProfileIndex: number;
	exp: Experience[];
}

const initialState: Profile = {
	me: {
		_id: "",
		name: "",
		surname: "",
		email: "",
		username: "",
		title: "",
		bio: "",
		area: "",
		image: "",
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
		__v: 0,
	},
	currentProfileIndex: 0,
	tokens: [
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMGNiYTI0ZjYwNTAwMTkzN2Q0NDkiLCJpYXQiOjE3MDgzMzAxNzAsImV4cCI6MTcwOTUzOTc3MH0.bxNveBRHEzm8op8lnJMQlFUQH7hpQVx2EKX4N9xuQlo",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTJjMDI0ZjYwNTAwMTkzN2Q0NjYiLCJpYXQiOjE3MDgzMzE3MTIsImV4cCI6MTcwOTU0MTMxMn0.kApVEAE7EuNP4OLFDVTbjttsI11FxXFMhjRTsu_XeVo",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFkZTI0ZjYwNTAwMTkzN2Q0NTUiLCJpYXQiOjE3MDgzMzE0OTYsImV4cCI6MTcwOTU0MTA5Nn0.Fi9e_SVIoiF7H-zbHPLrlR1lRmttL4ooCAgkbzv0ihQ",
	],
	exp: [
		{
			_id: "",
			role: "",
			company: "",
			startDate: "",
			endDate: "",
			description: "",
			area: "",
			username: "",
			image: "",
			__v: 0,
		},
	],
};

const profileReducer = createSlice({
	name: "profile",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.me = action.payload;
		},
		setUserImage: (state, action: PayloadAction<string>) => {
			state.me.image = action.payload;
		},
		setExperiences: (state, action: PayloadAction<Experience[]>) => {
			state.exp = action.payload;
		},
	},
});
export const { setUser, setUserImage, setExperiences } = profileReducer.actions;

export default profileReducer.reducer;
