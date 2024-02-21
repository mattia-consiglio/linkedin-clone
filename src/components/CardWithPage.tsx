import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { CardColWrapper } from "./CardColWrapper";
import { Link, useLocation } from "react-router-dom";
import { arrowLeftIcon, pencilIcon, plusIcon } from "../icons";
import { useAppDispatch } from "../redux/store";
import {
	deleteExperiencesAction,
	postExperiencesAction,
	putExperiencesAction,
} from "../redux/actions";

interface CardWithPageProps<T = any> {
	title: string;
	page: string;
	data: T[];
	icon: React.ReactNode;
}

const CardWithPage = ({ title, page, data, icon }: CardWithPageProps) => {
	const [modalShow, setModalShow] = useState(false);
	const location = useLocation();
	const [formData, setFormData] = useState({
		id: "",
		role: "",
		area: "",
		description: "",
		company: "",
		startDate: "",
		endDate: "",
		// Aggiungi qui altri campi se necessario
	});

	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const locationIsPage = location.pathname === page;
	const showItemsNumber = locationIsPage ? data.length : 3;

	const months = [
		"Gennaio",
		"Febbraio",
		"Marzo",
		"Aprile",
		"Maggio",
		"Giugno",
		"Luglio",
		"Agosto",
		"Settembre",
		"Ottobre",
		"Novembre",
		"Dicembre",
	];

	const getMonthAndYear = (date: string) => {
		const dateObj = new Date(date);
		return `${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
	};

	const getDifference = (dateStart: string, dateEnd: string) => {
		const dateStartObj = new Date(dateStart);
		const dateEndObj = new Date(dateEnd);
		const difference = dateEndObj.getTime() - dateStartObj.getTime();

		const differenceInMonths = Math.floor(
			difference / (1000 * 60 * 60 * 24 * 30),
		);
		const modDifferenceInMonths = Math.floor(differenceInMonths % 12);
		const differenceInYears = Math.floor(differenceInMonths / 12);
		if (differenceInYears < 1) {
			return `${modDifferenceInMonths} ${
				modDifferenceInMonths === 1 ? "mese" : "mesi"
			}`;
		} else if (differenceInYears >= 1 && modDifferenceInMonths < 1) {
			return `${differenceInYears} ${
				differenceInYears === 1 ? "anno" : "anni"
			}`;
		} else {
			return `${differenceInYears} ${
				differenceInYears === 1 ? "anno" : "anni"
			} ${modDifferenceInMonths} ${
				modDifferenceInMonths === 1 ? "mese" : "mesi"
			}`;
		}
	};

	return (
		<CardColWrapper>
			<Row className="px-3 pt-2 ">
				<Col className="d-flex align-items-center">
					{locationIsPage && (
						<Link
							to="/profile"
							className="text-body"
							style={{ marginLeft: "-10px" }}
						>
							<Button variant="" className="icon-button large-icon me-2">
								{arrowLeftIcon}
							</Button>
						</Link>
					)}
					<h3 className="fs-5">{title}</h3>
				</Col>
				<Col className="d-flex justify-content-end">
					<Button
						variant=""
						className="icon-button large-icon"
						onClick={() => {
							setModalShow(true);
							setFormData({
								id: "",
								role: "",
								area: "",
								description: "",
								company: "",
								startDate: "",
								endDate: "",
							});
						}}
					>
						{plusIcon}
					</Button>

					{!locationIsPage && (
						<Link to={page} className="text-body">
							<Button variant="" className="icon-button large-icon">
								{pencilIcon}
							</Button>
						</Link>
					)}
				</Col>
			</Row>
			{[...data]
				.sort((a, b) => {
					const aDate = new Date(a.startDate).getTime();
					const bDate = new Date(b.startDate).getTime();

					return bDate - aDate;
				})
				.slice(0, showItemsNumber)
				.map((item: any) => {
					return (
						<Row className="my-2 px-3" key={item._id}>
							<Col className="col-with-icon">{icon}</Col>
							<Col>
								<Row>
									<Col xs={10} className="d-flex flex-column">
										<span className="fw-bold">{item.role}</span>
										<span
											className="fs-14px"
											style={{ color: "rgb(0 0 0/.9) " }}
										>
											{item.company}
										</span>
										<span className="fs-12px text-secondary text-low-enpahsis">
											{getMonthAndYear(item.startDate)}
											{" - "}
											{getMonthAndYear(item.endDate)}
											{" - "}
											{getDifference(item.startDate, item.endDate)}
										</span>
										<span className="fs-14px text-secondary text-low-enpahsis">
											{" "}
											{item.area}{" "}
										</span>
									</Col>
									<Col xs={2} className="d-flex justify-content-end  ">
										{locationIsPage && (
											<Button
												variant=""
												className="icon-button large-icon"
												onClick={() => {
													setModalShow(true);
													setFormData({
														id: item._id,
														role: item.role,
														area: item.area,
														description: item.description,
														company: item.company,
														startDate: item.startDate.split("T")[0],
														endDate: item.endDate.split("T")[0],
													});
												}}
											>
												{pencilIcon}
											</Button>
										)}
									</Col>
								</Row>
								<Row className="mt-1">
									<Col>
										<p> {item.description} </p>
									</Col>
								</Row>
							</Col>
						</Row>
					);
				})}
			{!locationIsPage && data.length > 3 && (
				<Link to={page}>
					<Button className="fw-semibold border-top border border-0 customButton w-100 ">
						Mostra altro <i className="bi bi-arrow-right"></i>
					</Button>
				</Link>
			)}
			<Modal
				size="lg"
				show={modalShow}
				onHide={() => setModalShow(false)}
				className="fixed-modal"
			>
				<Modal.Header closeButton>
					<Modal.Title>Modifica esperienza</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-md-flex align-items-center column-gap-1  sky-blue-modal-section">
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
						<div>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
					</div>
					<p>* Indica che è obbligatorio</p>
					<div>
						{/* Inserimento del componente Form */}
						<Form>
							<br />
							<Form.Label>Qualifica*</Form.Label>
							<Form.Control
								type="text"
								placeholder="Esempio: Retail Sales Manager"
								name="role"
								value={formData.role}
								onChange={handleChange}
							/>
							<br />
							<Form.Label>Tipo di impiego</Form.Label>
							<Form.Select aria-label="Default select example">
								<option>Seleziona</option>
								<option value="1">A tempo pieno</option>
								<option value="2">Part-time</option>
								<option value="3">Autonomo</option>
								<option value="4">Freelance</option>
								<option value="5">A contratto</option>
								<option value="6">Stage</option>
								<option value="7">Apprendistato</option>
								<option value="8">Stagionale</option>
							</Form.Select>
							<p>
								Scopri di più sui{" "}
								<a href="" className="fw-bold">
									tipi di impiego
								</a>
								.
							</p>
							<Form.Group>
								<Form.Label>Nome azienda*</Form.Label>
								<Form.Control
									type="text"
									placeholder="Esempio: Microsoft"
									name="company"
									value={formData.company}
									onChange={handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Località</Form.Label>
								<Form.Control
									type="text"
									placeholder="Esempio: Milano, Italia"
									name="area"
									value={formData.area}
									onChange={handleChange}
								/>
							</Form.Group>
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

							<Form.Group>
								<Form.Label>Descrizione</Form.Label>
								<FloatingLabel
									controlId="floatingTextarea2"
									label="Descrizione"
								>
									<Form.Control
										as="textarea"
										placeholder="Leave a comment here"
										style={{ height: "100px" }}
										name="description"
										value={formData.description}
										onChange={handleChange}
									/>
								</FloatingLabel>
							</Form.Group>
							<input type="hidden" value={formData.id} name="id" />
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer className="justify-content-between">
					<Button
						variant=""
						onClick={() => {
							if (confirm("Sei sicuro di voler eliminare questa esperienza?")) {
								dispatch(deleteExperiencesAction(formData, formData.id));
							}
							setModalShow(false);
						}}
					>
						Elimina esperienza
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							const id = formData.id;
							const data: {
								id?: string;
								role: string;
								area: string;
								description: string;
								company: string;
								startDate: string;
								endDate: string;
								// Aggiungi qui altri campi se necessario
							} = { ...formData };
							delete data.id;
							if (id === "") {
								dispatch(postExperiencesAction(data));
							} else {
								dispatch(putExperiencesAction(data, id));
							}
							setModalShow(false);
						}}
					>
						Salva
					</Button>
				</Modal.Footer>
			</Modal>
		</CardColWrapper>
	);
};

export default CardWithPage;
