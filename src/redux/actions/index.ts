import { AppDispatch, RootState } from "../store";
import {
	addExperience,
	deleteExperience,
	editExperience,
	setExperiences,
	setUser,
	addUser,
} from "../reducers/profile";
import { setErrorStatus, setLoadingStatus } from "../reducers/status";

export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";
export const SET_USER_IMAGE = "SET_USER_IMAGE";

export type GetUserAction = {
	type: string;
	payload: any;
};

export const getUserAction = () => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id || "me";

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
				console.log("DATI RICEVUTI DA GET USER ACTION", response);
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

export const setUserImageAction = (image: File) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id;
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

export const getExperiencesAction = () => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id;
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

export const postExperiencesAction = (
	data: {
		role: string;
		company: string;
		startDate: string;
		endDate: string;
		description: string;
		area: string;
	},
	image?: File,
) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id;

		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];

		if (!userId) return;
		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				userId +
				"/experiences",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearerToken}`,
				},
				body: JSON.stringify(data),
			},
		)
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				} else {
					throw new Error("DATI NON INVIATI AL SERVER, POST EXP");
				}
			})
			.then((data) => {
				dispatch(addExperience(data));
				// dispatch(setExe(true));
				alert("Esperienza aggiunta con successo!");
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, POST EXP", err);
			});
	};
};

export const putExperiencesAction = (
	formData: {
		role: string;
		company: string;
		startDate: string;
		endDate: string;
		description: string;
		area: string;
	},
	idExeperience: string,
	image?: File,
) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id;

		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		console.log("DATA INVIATA AL SERVER, PUT EXP", formData);

		if (!userId) return;
		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				userId +
				"/experiences/" +
				idExeperience,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearerToken}`,
				},
				body: JSON.stringify(formData),
			},
		)
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				} else {
					throw new Error("DATI NON INVIATI AL SERVER, PUT EXP");
				}
			})
			.then((data) => {
				dispatch(editExperience({ ...data, ...formData }));
				alert("Esperienza modificata correttamente");
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, PUT EXP", err);
			});
	};
};

export const deleteExperiencesAction = (
	data: {
		role: string;
		company: string;
		startDate: string;
		endDate: string;
		description: string;
		area: string;
	},
	idExeperience: string,
) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const userId = getState().profile.me._id;

		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];

		if (!userId) return;
		fetch(
			"https://striveschool-api.herokuapp.com/api/profile/" +
				userId +
				"/experiences/" +
				idExeperience,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearerToken}`,
				},
				body: JSON.stringify(data),
			},
		)
			.then((resp) => {
				if (resp.ok) {
					dispatch(deleteExperience(idExeperience));
				} else {
					throw new Error("DATI NON INVIATI AL SERVER, PUT EXP");
				}
			})

			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, DELETE EXP", err);
			});
	};
};

export const getAllUserAction = () => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		// const userId = getState().profile.me._id;
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const tokens = getState().profile.tokens;
		dispatch(setLoadingStatus(true));

		tokens.map(async (bearerToken, i) => {
			console.log("BEARER", bearerToken);
			if (i === currentProfileIndex) return;
			return fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + bearerToken,
				},
			})
				.then((resp) => {
					if (!resp.ok) {
						throw new Error(resp.status + ": " + resp.statusText);
					}
					return resp.json();
				})
				.then((data) => {
					dispatch(addUser(data));
				});
		});
	};
};
