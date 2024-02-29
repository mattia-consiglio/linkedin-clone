import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

const VerticalSeparator = () => <div className="vertical-separator"></div>;

const NavJob = () => {
	return (
		<div
			className="navbar navbar-expand-lg navbar-light bg-white shadow-sm
	 custom-component"
		>
			<div className="container-fluid d-flex justify-content-center">
				<Dropdown className="mx-3">
					<Dropdown.Toggle
						className="rounded-pill"
						variant="success"
						id="dropdown-basic "
					>
						Lavoro
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>Tutto</Dropdown.Item>
						<Dropdown.Item>Persone</Dropdown.Item>
						<Dropdown.Item>Lavoro</Dropdown.Item>
						<Dropdown.Item>Post</Dropdown.Item>
						<Dropdown.Item>Aziende</Dropdown.Item>
						<Dropdown.Item>Scuole o Università</Dropdown.Item>
						<Dropdown.Item>Gruppi</Dropdown.Item>
						<Dropdown.Item>Eventi</Dropdown.Item>
						<Dropdown.Item>Corsi</Dropdown.Item>
						<Dropdown.Item>Servizi</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Button className="mx-3 	rounded-pill" variant="success">
					Candidatura semplice
				</Button>
				<Dropdown className="mx-3 ">
					<Dropdown.Toggle
						variant="light"
						id="dropdown-basic border-color-dark"
					>
						Data di pubblicazione
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="radio" aria-label="radio 1" />
								<div className="mx-auto">In qualsiasi momento</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="radio" aria-label="radio 2" />
								<div className="mx-3">Ultimo mese</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="radio" aria-label="radio 3" />
								<div className="mx-3">Ultima settimana</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="radio" aria-label="radio 4" />
								<div className="mx-3">Ultime 24h</div>
							</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="mx-3">
					<Dropdown.Toggle
						variant="light"
						id="dropdown-basic border-color-dark"
					>
						Livello di esperienza
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 1" />
								<div className="mx-3">Esperienza minima</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 2" />
								<div className="mx-3">Livello medio</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 3" />
								<div className="mx-3">Livello medio-alto</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 4" />
								<div className="mx-3">Direttore</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 5" />
								<div className="mx-3">Executive</div>
							</div>
							<hr className="dropdown-divider" />
							<div className="d-flex justify-content-between">
								<Button variant="light">Annulla</Button>
								<Button variant="primary">Visualizza risultati</Button>
							</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="mx-3">
					<Dropdown.Toggle
						variant="light"
						id="dropdown-basic border-color-dark"
					>
						Azienda
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Form.Control
							className="mt-0"
							type="text"
							placeholder="Aggiungi azienda"
						/>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 3" />
								<div className="mx-3">CPL</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 4" />
								<div className="mx-3">Fiserv</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 5" />
								<div className="mx-3">IT Search and Selection</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 3" />
								<div className="mx-3">Future Range</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 4" />
								<div className="mx-3">Hays</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="d-flex align-items-center">
								<Form.Check type="checkbox" aria-label="checkbox 5" />
								<div className="mx-3">Transact Campus</div>
							</div>
							<hr className="dropdown-divider" />
							<div className="d-flex justify-content-between">
								<Button variant="light">Annulla</Button>
								<Button variant="primary">Mostra altri</Button>
							</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Button variant="">Reimposta</Button>
			</div>
		</div>
	);
};

export default NavJob;
