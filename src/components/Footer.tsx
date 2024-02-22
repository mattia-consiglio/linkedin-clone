import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/style/style.scss"; // Importa il file CSS per le personalizzazioni

const MyFooter = () => {
	return (
		<footer className="footer ">
			<Container className=" text-md-left">
				<Row>
					<Col md={3}>
						<ul className="list-unstyled mt-5">
							<li className="list-unstyled small mb-1">Informazioni</li>
							<li className="small mb-1">Linee guida della community</li>
							<li className="small mb-4">Privacy</li>
							<li className="small mb-">Sales Solution </li>
							<li className="small">Centro sicurezza</li>
						</ul>
					</Col>
					<Col md={2}>
						<ul className="list-unstyled mt-5">
							<li className="small mb-1">Accessibilità</li>
							<li className="small mb-1">Carriera</li>
							<li className="small mb-2">
								Opzioni per gli annunci <br />
								pubblicitari
							</li>
							<li className="small">Mobile</li>
						</ul>
					</Col>
					<Col md={2}>
						<ul className="list-unstyled mt-5">
							<li className="small mb-1">Talent Solutions</li>
							<li className="small mb-1">Soluzioni di marketing</li>
							<li className="small mb-4">Pubblicità</li>
							<li className="small">Piccole imprese</li>
						</ul>
					</Col>
					<Col md={2}>
						<div className="footerSettings mt-4 ">
							<div className="flexContainer ">
								<FontAwesomeIcon icon={faQuestionCircle} />
								<h5 className="title small mt-2">Domande?</h5>
							</div>
						</div>
						<p className="inline-text small mt-1">
							Visita il nostro Centro assistenza.
						</p>
						<div className="flexContainer">
							<FontAwesomeIcon icon={faCog} />
							<h5 className="title small mb-1 mt-auto ">
								Gestisci il tuo account e la tua privacy
							</h5>
						</div>
						<p className="small">Vai alle impostazioni</p>
						<div className="flexContainer">
							<FontAwesomeIcon icon={faShieldAlt} />
							<h5 className="title small mt-auto">
								Trasparenza sui contenuti consigliati
							</h5>
						</div>
						<p className="small mt-auto">
							Scopri di più sui contenuti consigliati
						</p>
					</Col>
					<Col md={3}>
						<p className="small mt-4">Seleziona una lingua</p>
						<select className="form-select form-select-sm">
							<option value="English">Italiano(italiano) </option>
							<option value="Italian">Italian</option>
							<option value="Spanish">Spanish</option>
							<option value="AF">Afrikaans</option>
							<option value="Arabic">Arabic</option>
							<option value="Armenian">Armenian</option>
							<option value="Basque">Basque</option>
							<option value="Bengali">Bengali</option>
							<option value="Bulgarian">Bulgarian</option>
							<option value="Catalan">Catalan</option>
							<option value="Chinese (Simplified)">Chinese (Simplified)</option>
							<option value="Chinese (Traditional)">
								Chinese (Traditional)
							</option>
							<option value="Croatian">Croatian</option>
							<option value="Czech">Czech</option>
							<option value="Danish">Danish</option>
							<option value="Dutch">Dutch</option>
							<option value="English">English</option>
						</select>
					</Col>
				</Row>
			</Container>

			<Container fluid className="small  mx-3 mb-3">
				&copy; {new Date().getFullYear()} LinkedIn Corporation
			</Container>
		</footer>
	);
};

export default MyFooter;
