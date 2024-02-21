import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setExperiences, setUser, setPostProfile } from "../reducers/profile";
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

export const getPostAction = (id: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];

		if (!id) return;
		fetch("https://striveschool-api.herokuapp.com/api/posts/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bearerToken}`,
			},
		})
			.then((resp) => {
				if (resp.ok) {
					console.log(`RESPONSE OK FROM GET POST ${resp.status}`);
					return resp.json();
				} else {
					throw new Error("RESPONSE NOT OK FROM GET POST");
				}
			})
			.then((data) => {
				console.log("DATA RICEVUTA DA GET POST", data);
				dispatch(setPostProfile(data));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, GET POST", err);
			});
	};
};

export const postPostAction = (id: string, text: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		fetch("https://striveschool-api.herokuapp.com/api/posts/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bearerToken}`,
			},
			body: JSON.stringify({
				text: text,
			}),
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM POST COOMENT", resp);
					alert("COMMENT POSTED, REFRESH PAGE");
					return resp.json();
				} else {
					throw new Error("RESPONSE NOT OK FROM POST COMMENT");
				}
			})
			.then((data) => {
				console.log("DATA INVIATI DA FUCNTION POST COMMENT", data);
				dispatch(getPostAction(id));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, POST COMMENT", err);
			});
	};
};

export const deleteCommentsAction = (id: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bearerToken}`,
			},
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM DELETE COMMENT", resp);
					alert("COMMENT DELETE, REFRESH PAGE");
				} else {
					throw new Error("RESPONSE NOT OK FROM DELETE COMMENT");
				}
			})
			// .then((data) => {
			// 	console.log("DELETED COMMENT", data);
			// 	// dispatch(getPostAction(id));
			// })
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, DELETE COMMENT", err);
			});
	};
};

export const putCommentsAction = (id: string, text: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bearerToken}`,
			},
			body: JSON.stringify({
				text: text,
			}),
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM PUT COMMENT", resp);
					return resp.json();
				} else {
					throw new Error("RESPONSE NOT OK FROM PUT COMMENT");
				}
			})
			.then((data) => {
				console.log("COMMENT CHANGED DA PUT COMMENT", data);
				alert("COMMENT PUT, REFRESH PAGE");
				dispatch(getPostAction(id));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, PUT COMMENT", err);
			});
	};
};
