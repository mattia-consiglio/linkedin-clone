import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./ProfilePage";
import NavBar from "../NavBar";
import ExperiencesPage from "./ExperiencesPage";
import Posts from "../Posts";
import SideProfile from "../SideProfile";
import HomePage from "./HomePage";
import FormComment from "../FromCommentProva";
import { ErrorPage } from "./ErrorPage";
import { useEffect } from "react";
import { getUserAction, getExperiencesAction } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import JobsPage from "./JobsPage";
import JobsSeachPage from "./JobsSeachPage";

const routesComponent = (
	<Routes>
		<Route path="/" element={<HomePage />}></Route>
		<Route path="/profile" element={<Profile />}></Route>
		<Route path="/experiences" element={<ExperiencesPage />}></Route>
		<Route path="/form" element={<FormComment />}></Route>
		<Route path="/jobs" element={<JobsPage />}></Route>
		<Route path="/jobs/search" element={<JobsSeachPage />}></Route>

		<Route path="/*" element={<ErrorPage />}></Route>
	</Routes>
);

const appRoutes = routesComponent;
export const declaredRoutes: string[] = [];
appRoutes.props.children.forEach((child: React.ReactElement) => {
	declaredRoutes.push(child!.props!.path);
});
function App() {
	const dispatch = useAppDispatch();
	const profileInfo = useAppSelector((state) => state.profile.me);
	useEffect(() => {
		dispatch(getUserAction());
		dispatch(getExperiencesAction());
	}, [profileInfo._id]);
	return (
		<>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<main>{routesComponent}</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
