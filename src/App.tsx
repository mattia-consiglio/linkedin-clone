import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Profile />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
