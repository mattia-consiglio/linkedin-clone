import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, Experience, Post } from "../../intefaces";
// import { SET_USER, SET_USER_IMAGE } from "../actions";

export interface Profile {
	me: User;
	tokens: string[];
	currentProfileIndex: number;
	exp: Experience[];
	post: Post[];
	allUsers: User[];
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
	currentProfileIndex: 2,
	tokens: [
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMGNiYTI0ZjYwNTAwMTkzN2Q0NDkiLCJpYXQiOjE3MDgzMzAxNzAsImV4cCI6MTcwOTUzOTc3MH0.bxNveBRHEzm8op8lnJMQlFUQH7hpQVx2EKX4N9xuQlo", // Mattia
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTJjMDI0ZjYwNTAwMTkzN2Q0NjYiLCJpYXQiOjE3MDgzMzE3MTIsImV4cCI6MTcwOTU0MTMxMn0.kApVEAE7EuNP4OLFDVTbjttsI11FxXFMhjRTsu_XeVo", // Alessandro
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFkZTI0ZjYwNTAwMTkzN2Q0NTUiLCJpYXQiOjE3MDgzMzE0OTYsImV4cCI6MTcwOTU0MTA5Nn0.Fi9e_SVIoiF7H-zbHPLrlR1lRmttL4ooCAgkbzv0ihQ", // Ciro
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMWJkMjI0ZjYwNTAwMTkzN2Q0NzYiLCJpYXQiOjE3MDgzMzQwMzUsImV4cCI6MTcwOTU0MzYzNX0.q3_9_6g2DZdTVv8ET42lVOpu2nvm8GWthO_b3luwewM", // Gioele
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ1ZGFmOWEzM2ZjOTAwMTk2NTgzNmMiLCJpYXQiOjE3MDg1MTQwNDEsImV4cCI6MTcwOTcyMzY0MX0.IGws4Er_f4jcVYo98DjALA2yobA5OOcyxwwug63AHVE", // Ermias
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
			createdAt: new Date().toDateString(),
			updatedAt: new Date().toDateString(),
			__v: 0,
		},
	],
	post: [
		{
			text: "",
			username: "",
			user: {
				_id: "",
			},
			createdAt: new Date().toDateString(),
			updatedAt: new Date().toDateString(),
			__v: 0,
			_id: "",
		},
	],
	allUsers: [],
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
		addExperience: (state, action: PayloadAction<Experience>) => {
			state.exp.push(action.payload);
		},
		editExperience: (state, action: PayloadAction<Experience>) => {
			const index = state.exp.findIndex(
				(exp) => exp._id === action.payload._id,
			);
			state.exp[index] = action.payload;
		},
		deleteExperience: (state, action: PayloadAction<string>) => {
			const index = state.exp.findIndex((exp) => exp._id === action.payload);
			state.exp.splice(index, 1);
		},
		setCurrentProfileIndex: (state, action: PayloadAction<number>) => {
			state.currentProfileIndex = action.payload;
		},
		setPostProfile: (state, action: PayloadAction<Post[]>) => {
			state.post = action.payload;
		},
		addUser: (state, action: PayloadAction<User>) => {
			state.allUsers.push(action.payload);
		},
	},
});

export const {
	setUser,
	setUserImage,
	setExperiences,
	setPostProfile,
	addExperience,
	editExperience,
	deleteExperience,
	addUser,
} = profileReducer.actions;

export default profileReducer.reducer;
