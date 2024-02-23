import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import "../assets/style/style.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { declaredRoutes } from "./pages/App";
import { linkedin, linkedinExtended } from "../icons";
const Navbar = () => {
	const [showCard, setShowCard] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isErrorPage, setIsErrorPage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		///// ARRAY DI ROTTE DICHIARATE, AGGIUNGI QUA LA ROTTA "ESISTENTE" PER NON FAR APPARIRE LA NAV DI EORROR PAGE

		setIsErrorPage(!declaredRoutes.includes(location.pathname));
	}, [location.pathname]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleTuClick = () => {
		setShowCard(!showCard);
	};

	const handleClick = (label: string) => {
		console.log(label + " cliccato");
	};
	const profileInfo = useAppSelector((state) => state.profile.me);

	return (
		<nav className={`navbar`}>
			<div className="container">
				<div className="d-flex align-items-center flex-nowrap ">
					<NavLink to="/" className="navbar-brand text-primary m-0">
						{isErrorPage ? linkedinExtended : linkedin}
					</NavLink>
					<form className={isErrorPage ? "d-none" : "d-lg-flex d-none"}>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							style={{ height: "34px" }}
						/>
					</form>
				</div>

				<ul
					className={
						isErrorPage
							? "d-none d-flex flex-row mb-0 p-0 justify-flex-end"
							: "d-flex flex-row mb-0 fex-grow-1 justify-flex-end p-0"
					}
				>
					<li className="nav-item d-md-none">
						<a className="nav-link" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								id="search-medium"
								aria-hidden="true"
								role="none"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
							>
								<path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
							</svg>
						</a>
					</li>
					<li className="nav-item">
						<NavLink
							to="/"
							className={({ isActive }) =>
								"nav-link" + (isActive ? " active" : "")
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
							</svg>
							<span>Home</span>
						</NavLink>
					</li>

					<li className="nav-item" onClick={() => handleClick("Rete")}>
						<a className="nav-link" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 100 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
							</svg>
							<span>Rete</span>
						</a>
					</li>
					<li className="nav-item" onClick={() => handleClick("Lavoro")}>
						<NavLink
							className={({ isActive }) =>
								"nav-link" + (isActive ? " active" : "")
							}
							to="/jobs"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
							</svg>
							<span>Lavoro</span>
						</NavLink>
					</li>
					<li className="nav-item" onClick={() => handleClick("Messaggistica")}>
						<a className="nav-link" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M22 8a6 6 0 01-3 5.22A7 7 0 0012 7H8a7 7 0 00-1.95.28A6 6 0 0112 2h4a6 6 0 016 6zm-4 6v.48a6 6 0 01-2.69 5L10 23v-3H8A6 6 0 018 8h4a6 6 0 016 6zM8 14a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1z"></path>
							</svg>
							<span>Messaggistica</span>
						</a>
					</li>
					{/* Aggiunto elemento "Tu" */}
					<li className="nav-item" onClick={handleTuClick}>
						<span
							className="nav-link position-relative"
							style={{ cursor: "pointer" }}
						>
							<img
								src={profileInfo.image}
								width="25px"
								height="25px"
								alt={profileInfo.name + " " + profileInfo.surname}
								style={{ borderRadius: "50%" }}
							/>

							<span>Tu &#9660;</span>
							{showCard && (
								<div
									className="card"
									style={{
										position: "absolute",
										top: "55px",
										right: "-26px",
										zIndex: "200",
										width: "300px",
									}}
								>
									<div className="card-body p-3">
										<div style={{ display: "flex", alignItems: "center" }}>
											<img
												src={profileInfo.image}
												className="rounded-circle me-3"
												alt="Profilo"
												style={{ width: "50px", height: "50px" }}
											/>
											<div>
												<h5>{profileInfo.name + " " + profileInfo.surname}</h5>
												<p>{profileInfo.bio}</p>
											</div>
										</div>
										<Link
											to={"/profile"}
											className="btn btn-outline-primary mt-1 w-100 rounded-pill"
										>
											Visualizza profilo
										</Link>
										<hr />
										<a href="##" className="text-decoration-none text-dark">
											<h6>Account</h6>
											<p>Prova Premium per 0 EUR</p>
										</a>
										<a href="#" className="text-decoration-none text-dark">
											<p>Impostazioni e privacy</p>
										</a>
										<a href="#" className="text-decoration-none text-dark">
											<p>Guida</p>
										</a>
										<a href="#" className="text-decoration-none text-dark">
											<p>Lingua</p>
										</a>
										<hr />
										<a href="#" className="text-decoration-none text-dark">
											<h6>Gestisci</h6>
											<p>Post e attività</p>
											<p>Account per la pubblicazione di of...</p>
										</a>
										<hr />
										<a href="#" className="text-decoration-none text-dark">
											Esci
										</a>
									</div>
								</div>
							)}
						</span>
					</li>

					{/* Elemento per le aziende */}
					<li className="nav-item">
						<a
							className="nav-link d-flex flex-column align-items-center"
							href="#"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
							</svg>
							<span>Per le aziende</span>
						</a>
					</li>
					{/* Fine elemento per le aziende */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
