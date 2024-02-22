import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/ProfilePage";
import NavBar from "./components/NavBar";
import ExperiencesPage from "./components/pages/ExperiencesPage";
import Posts from "./components/Posts";
import SideProfile from "./components/SideProfile";
import HomePage from "./components/pages/HomePage";
import FormComment from "./components/FromCommentProva";
import { ErrorPage } from "./components/pages/ErrorPage";
import { useEffect } from "react";
import { getUserAction, getExperiencesAction } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/store";
import NavJob from "./components/NavJob";

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
				<main>
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/experiences" element={<ExperiencesPage />}></Route>
						<Route path="/form" element={<FormComment />}></Route>
						<Route path="/navjob" element={<NavJob />}></Route>{" "}
						<Route path="/*" element={<ErrorPage />}></Route>
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
