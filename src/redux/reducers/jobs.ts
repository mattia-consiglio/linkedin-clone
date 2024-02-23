import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { act } from "react-dom/test-utils";

export interface Job {
	_id: string;
	url: string;
	title: string;
	company_name: string;
	category: string;
	job_type: string;
	publication_date: Date;
	candidate_required_location: string;
	salary: string;
	description: string;
}

interface JobsState {
	search: Job[];
	fixedSearches: Job[][];
}

const initialState: JobsState = {
	search: [],
	fixedSearches: [[], [], []],
};

const jobsReducer = createSlice({
	name: "profile",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setJobs: (state, action: PayloadAction<Job[]>) => {
			state.search = action.payload;
		},

		setFixedJobs: (
			state,
			action: PayloadAction<{ jobs: Job[]; index: number }>,
		) => {
			console.log(action.payload);
			state.fixedSearches[action.payload.index] = action.payload.jobs;
		},
	},
});

export const { setJobs, setFixedJobs } = jobsReducer.actions;

export default jobsReducer.reducer;

interface JobsDispatch {
	search: string;
	limit?: number;
	company?: string;
	category?: string;
	index?: number;
}

export const getJobsAction = ({
	search,
	limit,
	company,
	category,
	index,
}: JobsDispatch) => {
	return async (dispatch: AppDispatch) => {
		const queryParamsMap: { [key: string]: any } = {
			search,
			limit,
			company,
			category,
		};
		for (const key in queryParamsMap) {
			const value = queryParamsMap[key];
			if (!value) {
				delete queryParamsMap[key];
			}
		}
		console.log(queryParamsMap, index);
		const queryParams = new URLSearchParams(queryParamsMap).toString();
		console.log(queryParams);

		const response = await fetch(
			"https://strive-benchmark.herokuapp.com/api/jobs?" + queryParams,
		);
		const data = await response.json();
		if (index !== undefined) {
			dispatch(setFixedJobs({ jobs: data.data, index }));
		} else {
			dispatch(setJobs(data.data));
		}
	};
};
