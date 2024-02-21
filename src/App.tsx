import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";
import ExperiencesPage from "./components/ExperiencesPage";
import { useEffect } from "react";
import { getUserAction, getExperiencesAction } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/store";

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
					{" "}
					<NavBar />{" "}
				</header>
				<main>
					<Routes>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/experiences" element={<ExperiencesPage />}></Route>
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
