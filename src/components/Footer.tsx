import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
	return (
		<footer className="footer">
			<Container className=" text-md-left">
				<Row>
					<Col md={2}>
						<ul className="list-unstyled">
							<li className="list-unstyled">Informazioni</li>
							<li>Linee guida della community</li>
							<select>
								<option>Privacy e condizioni</option>
								<option>Informativa sulla privacy</option>
								<option>Contratto di licenza</option>
								<option>Termini e condizioni delle pagine</option>
								<option>Informativa sui cookie</option>
								<option>Informativa sui copyright</option>
							</select>
							<li>Centro sicurezza</li>
						</ul>
					</Col>
					<Col md={2}>
						<ul className="list-unstyled">
							<li>Accessibilità</li>
							<li>Carriera</li>
							<li>
								Opzioni per gli annunci <br />
								pubblicitari
							</li>
							<li>Mobile</li>
						</ul>
					</Col>
					<Col md={2}>
						<ul className="list-unstyled">
							<li>Talent Solutions</li>
							<li>Soluzioni di marketing</li>
							<li>Pubblicità</li>
							<li>Piccole imprese</li>
						</ul>
					</Col>
					<Col md={2}>
						<div className="footerSettings">
							<FontAwesomeIcon icon={faQuestionCircle} />
							<h5 className="title">Domande?</h5>
						</div>
						<p className="inline-text">Visita il nostro Centro assistenza.</p>
						<div className="footerSettings">
							<FontAwesomeIcon icon={faCog} />
							<h5 className="title">
								Gestisci il tuo account e la tua privacy
							</h5>
						</div>
						<p>Vai alle impostazioni</p>
						<div className="footerSettings">
							<FontAwesomeIcon icon={faShieldAlt} />
							<h5 className="title">Trasparenza sui contenuti consigliati</h5>
						</div>
						<p>Scopri di più sui contenuti consigliati</p>
					</Col>
					<Col md={2}>
						<p>Seleziona una lingua</p>
						<select>
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

			<Container fluid>&copy; {new Date().getFullYear()} LinkedIn</Container>
		</footer>
	);
};

export default MyFooter;
