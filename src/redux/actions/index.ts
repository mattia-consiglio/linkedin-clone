import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export const SET_USER = "SET_USER";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";

export type GetUserAction = {
	type: string;
	payload: any;
};

export const getUserAction = (id = "", profileIndex = 0) => {
	return async (
		dispatch: Dispatch<GetUserAction>,
		getState: () => RootState,
	) => {
		const bearerToken = getState().profile.tokens[profileIndex];

		dispatch({
			type: SET_LOADING_STATUS,
			payload: true,
		});
		try {
			let resp = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/" + id,
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
				dispatch({
					type: SET_USER,
					payload: response,
				});
			} else {
				dispatch({
					type: SET_ERROR_STATUS,
					payload: resp.status + ": " + resp.statusText,
				});
			}
		} catch (error) {
			dispatch({
				type: SET_ERROR_STATUS,
				payload: error,
			});
		} finally {
			dispatch({
				type: SET_LOADING_STATUS,
				payload: false,
			});
		}
	};
};

//////////////////////////////////// Experience ////////////////
export const SET_EXPERIENCES = "SET_EXPERIENCES";

export type GetExperiencesAction = {
	type: string;
	payload: any[];
};

export const getExperiencesAction = (id: string, i = 0) => {
	return (
		dispatch: Dispatch<GetExperiencesAction>,
		getState: () => RootState,
	) => {
		const bearerToken = getState().profile.tokens[i];

		if (!id) return;

		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				id +
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
				console.log("ESEPRIENZE", data);
				dispatch({
					type: SET_EXPERIENCES,
					payload: data,
				});
			})
			.catch((err) => {
				console.log("GET EXPERIENCES ERROR REQUEST", err);
			});
	};
};

export const postExperiencesAction = (id: string, i = 0) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const bearerToken = getState().profile.tokens[i];

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
