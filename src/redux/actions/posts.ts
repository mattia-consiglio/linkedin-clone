import { setComments, setPosts } from "../reducers/posts";
import { AppDispatch, RootState } from "../store";

export const getPostsAction = (id: string) => {
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
				dispatch(setPosts(data));
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
					alert("POST PUBBLICATO CON SUCCESSO");
					return resp.json();
				} else {
					throw new Error("RESPONSE NOT OK FROM POST COMMENT");
				}
			})
			.then((data) => {
				console.log("DATA INVIATI DA FUCNTION POST COMMENT", data);
				dispatch(getPostsAction(id));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, POST COMMENT", err);
			});
	};
};

export const deletePostAction = (postId: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bearerToken}`,
			},
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM DELETE COMMENT", resp);
					dispatch(getPostsAction(postId));
					alert("COMMENT DELETED");
				} else {
					throw new Error("RESPONSE NOT OK FROM DELETE COMMENT");
				}
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, DELETE COMMENT", err);
			});
	};
};

export const putPostAction = (postId: string, text: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		if (!postId) {
			console.error("ID del post non definito");
			return;
		}

		const currentProfileIndex = getState().profile.currentProfileIndex;
		const bearerToken = getState().profile.tokens[currentProfileIndex];
		fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
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
				alert("COMMENT PUT");
				dispatch(getPostsAction(postId));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, PUT COMMENT", err);
			});
	};
};

export const getCommentsAction = () => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		const tokens = getState().profile.tokens;

		fetch("https://striveschool-api.herokuapp.com/api/comments/", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ4YTE2MTk0MTVjZTAwMTkzNDYzMDciLCJpYXQiOjE3MDg2OTU5MDUsImV4cCI6MTcwOTkwNTUwNX0.uEOgBUFXGuK67tk0EhJFh_VfQX552tv0ebuXCHRxzXE",
			},
		})
			.then((resp) => {
				if (!resp.ok) {
					throw new Error(resp.status + ": " + resp.statusText);
				} else {
					console.log("RESPONSE OK FROM GET COMMENT", resp);
					return resp.json();
				}
			})
			.then((data) => {
				console.log("DATA RICEVUTA DA GET COMMENT", data);
				dispatch(setComments(data));
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, GET COMMENT", err);
			});
	};
};

export const postCommentAction = (
	postId: string,
	text: string,
	rate: string,
) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		// const bearerToken = getState().profile.tokens[currentProfileIndex];

		fetch("https://striveschool-api.herokuapp.com/api/comments/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ4YTE2MTk0MTVjZTAwMTkzNDYzMDciLCJpYXQiOjE3MDg2OTU5MDUsImV4cCI6MTcwOTkwNTUwNX0.uEOgBUFXGuK67tk0EhJFh_VfQX552tv0ebuXCHRxzXE",
			},
			body: JSON.stringify({
				comment: text,
				rate: rate,
				elementId: postId,
			}),
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM POST COOMENT", resp);
					alert("COMMENT PUBBLICATO CON SUCCESSO");
					return resp.json();
				} else {
					throw new Error("RESPONSE NOT OK FROM POST COMMENT");
				}
			})
			.then((data) => {
				console.log("DATA INVIATI DA FUCNTION POST COMMENT", data);
				dispatch(getCommentsAction());
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, POST COMMENT", err);
			});
	};
};

export const deleteCommentAction = (id: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const currentProfileIndex = getState().profile.currentProfileIndex;
		// const bearerToken = getState().profile.tokens[currentProfileIndex];

		fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ4YTE2MTk0MTVjZTAwMTkzNDYzMDciLCJpYXQiOjE3MDg2OTU5MDUsImV4cCI6MTcwOTkwNTUwNX0.uEOgBUFXGuK67tk0EhJFh_VfQX552tv0ebuXCHRxzXE",
			},
		})
			.then((resp) => {
				if (resp.ok) {
					console.log("RESPONSE OK FROM DELETE COMMENT", resp);
					alert("COMMENT DELETED");
				} else {
					throw new Error("RESPONSE NOT OK FROM DELETE COMMENT");
				}
			})
			.catch((err) => {
				console.log("ERRORE NEL CONTATTARE IL SERVER, DELETE COMMENT", err);
			});
	};
};
