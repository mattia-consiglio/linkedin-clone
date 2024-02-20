import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import "../assets/style/style.scss";
const Navbar = () => {
	const [showCard, setShowCard] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

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
		<nav
			className={`navbar navbar-expand-lg navbar-light ${
				isMobile ? "first-mobile" : ""
			}`}
			style={{ backgroundColor: "#ffffff", height: "60px" }}
		>
			<div className="container-fluid custom-container">
				<a className="navbar-brand" href="#">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC"
						alt="Home"
						style={{ marginRight: "10px", width: "40px", height: "40px" }}
					/>
				</a>

				<form className="d-flex">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
				</form>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav justify-content-center">
						<li className="nav-item" onClick={() => handleClick("Home")}>
							<a className="nav-link" href="#">
								<div className="d-flex flex-column align-items-center">
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
									Home
								</div>
							</a>
						</li>

						<li className="nav-item" onClick={() => handleClick("Rete")}>
							<a className="nav-link" href="#">
								<div className="d-flex flex-column align-items-center">
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
									Rete
								</div>
							</a>
						</li>
						<li className="nav-item" onClick={() => handleClick("Lavoro")}>
							<a className="nav-link" href="#">
								<div className="d-flex flex-column align-items-center">
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
									Lavoro
								</div>
							</a>
						</li>
						<li
							className="nav-item"
							onClick={() => handleClick("Messaggistica")}
						>
							<a className="nav-link" href="#">
								<div className="d-flex flex-column align-items-center">
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
									Messaggistica
								</div>
							</a>
						</li>
						{/* Aggiunto elemento "Tu" */}
						<li className="nav-item" onClick={handleTuClick}>
							<a className="nav-link" href="#">
								<div className="d-flex flex-column align-items-center position-relative ">
									<img
										src={profileInfo.image}
										width="25px"
										alt="Gioele Friggia"
										style={{ borderRadius: "50%" }}
									/>

									<span>Tu &#9660;</span>
									{showCard && (
										<div
											className="card"
											style={{
												position: "absolute",
												top: "65px",
												right: "-60px",
												zIndex: "200px",
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
														<h5>
															{profileInfo.name + " " + profileInfo.surname}
														</h5>
														<p>{profileInfo.bio}</p>
													</div>
												</div>
												<a
													href="#"
													className="btn btn-outline-primary mt-1 w-100 rounded-pill"
												>
													Visualizza profilo
												</a>
												<hr />
												<a href="#" className="text-decoration-none text-dark">
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
								</div>
							</a>
						</li>

						{/* Linea verticale */}
						<hr className="vertical-line" />

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
								Per le aziende
							</a>
						</li>
						{/* Fine elemento per le aziende */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
