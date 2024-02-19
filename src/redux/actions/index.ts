export const SET_USER = "SET_USER";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";

export const getUserAction = (id = "", profileIndex = 0) => {
	return async (
		dispatch: any,
		getState: () => {
			(): any;
			new (): any;
			profile: { (): any; new (): any; tokens: any[] };
		},
	) => {
		const bearerToken = getState().profile.tokens[profileIndex];
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
