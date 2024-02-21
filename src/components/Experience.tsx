import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Row, Form, FloatingLabel } from "react-bootstrap";

const Experience = () => {
	const [show, setShow] = useState(true);
	const [formData, setFormData] = useState({
		startDate: "",
		endDate: "",
		// Aggiungi qui altri campi se necessario
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<Row className="experience">
			<div className="experience">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					>
						<h3>
							<Link to="/profile">
								<FontAwesomeIcon
									icon={faArrowLeft}
									className="back-arrow-icon"
									style={{ marginRight: "10px", cursor: "pointer" }}
								/>
							</Link>
							Esperienza
						</h3>
						<svg
							aria-label="img palazzi"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 128 128"
							id="company-accent-4"
						>
							<path fill="#e7e2dc" d="M0 0h128v128H0z" />
							<path fill="#9db3c8" d="M48 16h64v112H48z" />
							<path fill="#788fa5" d="M16 80h32v48H16z" />
							<path fill="#56687a" d="M48 80h32v48H48z" />
						</svg>
					</div>
					<div>
						<FontAwesomeIcon
							onClick={() => {
								setShow(true);
							}}
							icon={faPen}
							style={{ marginRight: "30px" }}
						/>
						<FontAwesomeIcon
							icon={faPlus}
							style={{ marginRight: "30px", cursor: "pointer" }}
						/>
					</div>
				</div>
				<h4>Webmaster</h4>
				<h4>WM snc. Part-time</h4>
				<p>gen 2018 - nov 2023. 5 anni 11 mesi</p>
				<p>Bologna, Italia</p>
				<p>Creazione e manutenzione dei siti web in Wordpress.</p>
				<p>
					Gestione cPanel e WHM per creazione account hosting, e-mail, redirect,
					certificat SSL....
				</p>
			</div>
			<Modal size="lg" show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Modifica esperienza</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div>
							<h5>Informa la rete</h5>

							<p>
								Attiva l’opzione per informare la tua rete delle principali
								modifiche al profilo (ad esempio un nuovo lavoro) e degli
								anniversari lavorativi. Gli aggiornamenti possono richiedere
								fino a 2 ore. Scopri di più sulla condivisione delle modifiche
								del profilo.
							</p>
						</div>
						<label className="switch">
							<input type="checkbox" />
							<span className="slider round"></span>
						</label>
					</div>
					<p>* Indica che è obbligatorio</p>
					<div>
						<p>*Qualifica</p>
						{/* Inserimento del componente Form */}
						<Form>
							<br />
							<Form.Control type="text" placeholder="Normal text" />
							<br />
							{/* <p> Tipo di impiego </p>
							<Form.Select aria-label="Default select example"> */}
							{/* <option>Seleziona</option>
								<option value="1">A tempo pieno</option>
								<option value="2">Part-time</option>
								<option value="3">Autonomo</option>
								<option value="4">Freelance</option>
								<option value="5">A contratto</option>
								<option value="6">Stage</option>
								<option value="7">Apprendistato</option>
								<option value="8">Stagionale</option> */}
							{/* </Form.Select> */}
							<Form.Group controlId="startDate">
								<Form.Label>Data di inizio</Form.Label>
								<Form.Control
									type="date"
									placeholder="Inserisci la data di inizio"
									name="startDate"
									value={formData.startDate}
									onChange={handleChange}
								/>
							</Form.Group>
							<Form.Group controlId="endDate">
								<Form.Label>Data di fine</Form.Label>
								<Form.Control
									type="date"
									placeholder="Inserisci la data di fine"
									name="endDate"
									value={formData.endDate}
									onChange={handleChange}
								/>
							</Form.Group>
							<p> Settore* </p>
							<Form.Control type="text" placeholder="Settore*" />
							<p>
								LinkedIn utilizza le informazioni sul settore per fornire
								segnalazioni più pertinenti
							</p>
							<p> Descrizione </p>

							<FloatingLabel controlId="floatingTextarea2" label="Descrizione">
								<Form.Control
									as="textarea"
									placeholder="Leave a comment here"
									style={{ height: "100px" }}
								/>
							</FloatingLabel>
							<p> Area </p>
							<Form.Control type="text" placeholder="Area" />
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="primary">Save Changes</Button>
				</Modal.Footer>
			</Modal>
		</Row>
	);
};

export default Experience;
