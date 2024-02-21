import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setExperiences, setUser } from "../reducers/profile";
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
		const formData = new FormData();
		formData.append("profile", image);

		try {
			let resp = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
				{
					method: "POST",
					headers: {
						//non aggiungere il Content-Type, viene aggiunto automaticamente
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

export const getExperiencesAction = (userId: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];

		if (!userId) return;

		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				userId +
				"/experiences",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearerToken}`,
				},
			},
		)
			.then((resp) => {
				if (!resp.ok) {
					throw new Error(
						`RISPOTA NON OK RICEVUTA DA GET EXPERIENCES REQUEST: ${resp.status}`,
					);
				} else {
					console.log("RISPOSTA OK RICEVUTA DA GET EXPERIENCES REQUEST", resp);
					return resp.json();
				}
			})
			.then((data) => {
				dispatch(setExperiences(data));
			})
			.catch((error: any) => {
				dispatch(setErrorStatus(error.toString()));
			})
			.finally(() => {
				dispatch(setLoadingStatus(false));
			});
	};
};

export const postExperiencesAction = (id: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];

		if (!id) return;
		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				id +
				"/experiences",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearerToken}`,
				},
				body: JSON.stringify({
					role: "Developer",
					company: "MyBrand",
					startDate: "2012-06-16",
					endDate: "2023-08-21", // può essere null
					description: "grtgtgtgtgtg",
					area: "Rome",
				}),
			},
		)
			.then((resp) => {
				if (resp.ok) {
					console.log("DATI INVIATI AL SERVER, POST EXP", resp);
					return resp.json();
				} else {
					throw new Error("DATI NON INVIATI AL SERVER, POST EXP");
				}
			})
			.then((data) => {
				console.log("DATI RICEVUTI DAL SERVER, POST EXP", data);
				dispatch(getExperiencesAction(id));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, POST EXP", err);
			});
	};
};
