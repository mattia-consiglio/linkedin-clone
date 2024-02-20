import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<header></header>
				<main className="BgPage">
					<Routes>
						<Route path="/" element={<Profile />}></Route>
					</Routes>
				</main>
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
