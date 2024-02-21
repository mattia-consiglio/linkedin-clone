import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";
import ExperiencesPage from "./components/ExperiencesPage";
import FormComment from "./components/FromCommentProva";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<main className="BgPage">
					<Routes>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/experiences" element={<ExperiencesPage />}></Route>
						<Route path="/form" element={<FormComment />}></Route>
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
