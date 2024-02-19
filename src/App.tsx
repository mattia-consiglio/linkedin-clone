import React, { useState } from "react";
import Navbar from "./components/NavBar"; // Importa il componente Navbar
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar /> {/* Includi la navbar qui */}
			<div>
				<h1>Contatore: {count}</h1>
				<button onClick={() => setCount(count + 1)}>Incrementa</button>
			</div>
		</>
	);
}

export default App;
