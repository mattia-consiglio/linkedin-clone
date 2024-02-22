// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";
import ExperiencesPage from "./components/ExperiencesPage";
import Posts from "./components/Posts";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<main className="BgPage">
					<Routes>
						<Route path="/post" element={<Posts />} />{" "}
						<Route path="/profile" element={<Profile />} />
						<Route path="/experiences" element={<ExperiencesPage />} />
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
