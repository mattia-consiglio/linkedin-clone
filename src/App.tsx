import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					{" "}
					<NavBar />{" "}
				</header>
				<main className="BgPage">
					<Routes>
						<Route path="/" element={<Profile />}></Route>
					</Routes>
				</main>
				<Footer />
				<footer></footer>
			</BrowserRouter>
		</>
	);
}

export default App;
