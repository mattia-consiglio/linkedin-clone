import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";
import ExperiencesPage from "./components/ExperiencesPage";
import SideProfile from "./components/SideProfile";
import HomePage from "./components/HomePage";
import FormComment from "./components/FromCommentProva";
import { ErrorPage } from "./components/ErrorPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<main className="BgPage">
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/experiences" element={<ExperiencesPage />}></Route>
						<Route path="/form" element={<FormComment />}></Route>
						<Route path="/*" element={<ErrorPage />}></Route>
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
