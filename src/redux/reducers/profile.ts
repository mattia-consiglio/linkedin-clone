import { User, Experience } from "../../intefaces";
import { SET_USER, SET_EXPERIENCES } from "../actions";

export interface Profile {
	me: User;
	tokens: string[];
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
		createdAt: new Date(),
		updatedAt: new Date(),
		__v: 0,
	},
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

const profileReducer = (
	state = initialState,
	action: { type: string; payload: User },
) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, me: action.payload };
		case SET_EXPERIENCES:
			return { ...state, exp: action.payload };

		default:
			return state;
	}
};

export default profileReducer;
