import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setUser } from "../reducers/profile";
import { setErrorStatus, setLoadingStatus } from "../reducers/status";
import { ImageProps } from "react-bootstrap";

export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";
export const SET_USER_IMAGE = "SET_USER_IMAGE";

export type GetUserAction = {
	type: string;
	payload: any;
};

export const getUserAction = (userId = "") => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		dispatch(setLoadingStatus(true));
		try {
			let resp = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/" + userId,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + bearerToken,
					},
				},
			);
			if (resp.ok) {
				let response = await resp.json();
				dispatch(setUser(response));
			} else {
				throw new Error(resp.status + ": " + resp.statusText);
			}
		} catch (error: any) {
			dispatch(setErrorStatus(error.toString()));
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
};

export const setUserImageAction = (userId = "", image: File) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		console.log(image);
		const formData = new FormData();
		formData.append("profile", image);
		console.log(formData);

		try {
			let resp = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
				{
					method: "POST",
					headers: {
						Authorization: "Bearer " + bearerToken,
					},
					body: formData,
				},
			);
			if (resp.ok) {
				let response = await resp.json();
				dispatch(setUser(response));
			} else {
				throw new Error(resp.status + ": " + resp.statusText);
			}
		} catch (error: any) {
			dispatch(setErrorStatus(error.toString()));
		}
	};
};
