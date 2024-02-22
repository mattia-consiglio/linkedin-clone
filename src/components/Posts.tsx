import React, { useState, useRef } from "react";
import {
	Modal,
	Button,
	Form,
	OverlayTrigger,
	Tooltip,
	Card,
} from "react-bootstrap";
import { MdEventNote, MdCake, MdClose, MdMoreHoriz } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import eventImage from "../assets/img/Screenshot 2024-02-21 123701.png";
import ListGroup from "react-bootstrap/ListGroup";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { PiShareFatThin } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
const Posts = () => {
	const [showModal, setShowModal] = useState(false);
	const [showEventModal, setShowEventModal] = useState(false);
	const [showPost, setShowPost] = useState(true);
	const [showSecondModal, setShowSecondModal] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [showCommentSection, setShowCommentSection] = useState(false);

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleChooseFile = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleCloseEventModal = () => {
		setShowEventModal(false);
	};

	const handleShowEventModal = () => {
		setShowEventModal(true);
	};

	const handleDeletePost = () => {
		setShowPost(false);
	};

	const handleSecondCardOptions = () => {
		setShowSecondModal(true);
	};

	const handleCloseSecondModal = () => {
		setShowSecondModal(false);
	};

	const handleShowCommentSection = () => {
		setShowCommentSection(true);
	};

	const likeIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="thumbs-up-outline-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
		</svg>
	);

	const arrowCircle = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="repost-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
		</svg>
	);

	const commentIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="comment-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
		</svg>
	);
	const contenutiIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="image-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
		</svg>
	);
	const inviaIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="send-privately-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
			width="24"
			height="24"
		>
			<path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
		</svg>
	);
	const eventIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="calendar-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
		</svg>
	);
	const artIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="content-align-left-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
		>
			<path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
		</svg>
	);
	const coccasioneIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="starburst-medium"
			aria-hidden="true"
			role="none"
			data-supported-dps="24x24"
			fill="currentColor"
			width="24"
			height="24"
		>
			<path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
		</svg>
	);
	return (
		<div>
			<div className="center-content">
				<div className="card large-card">
					<div className="card-header">
						<img
							src="https://placedog.net/30"
							alt="Profilo"
							className="profile-image"
						/>
						<Form.Control
							type="password"
							id="inputPassword5"
							aria-describedby="passwordHelpBlock"
							onClick={handleShowModal}
						/>
					</div>
					<div className="post-actions text-center d-flex justify-content-between b-  ">
						<Button
							// onClick={handleChooseFile}
							className="btn-one btn-no-border btn-icon-extra-small mt-3"
						>
							<span className="icon-container onClick={handleChooseFile}">
								{contenutiIcon}
							</span>{" "}
							Contenuti multimediali
						</Button>

						<Button
							className="btn-two btn-no-border  btn-icon-extra-small mt-3"
							variant="outline-secondary"
							onClick={handleShowEventModal}
						>
							<span className="icon-container">{eventIcon}</span> Evento
						</Button>
						<Button
							variant="outline-secondary"
							className="btn-three btn-no-border  btn-icon-extra-small mt-3"
						>
							<span className="icon-container">{artIcon}</span> Scrivi un
							articolo
						</Button>
					</div>
				</div>
			</div>

			{/* Modale generico */}
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<img
						src="https://placedog.net/30"
						alt="Profilo"
						className="profile-image"
					/>
					<Modal.Title>
						<h5>Nome del Profilo</h5>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="d-flex flex-column align-items-center pt-4">
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Di cosa vorresti parlare?</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>

					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						style={{ display: "none" }}
					/>

					<div className="d-flex justify-content-center">
						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip>Inserisci contenuti multimediali</Tooltip>}
						>
							<Button
								className="btn-modal"
								variant="outline-secondary"
								style={{ margin: "10px" }}
								onClick={handleChooseFile}
							>
								{contenutiIcon}
							</Button>
						</OverlayTrigger>

						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip>Crea un evento</Tooltip>}
						>
							<Button
								className="btn-modal"
								variant="outline-secondary"
								style={{ margin: "10px" }}
								onClick={handleShowEventModal}
							>
								{" "}
								{eventIcon}
							</Button>
						</OverlayTrigger>

						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip>Festeggia un occasione speciale</Tooltip>}
						>
							<Button variant="outline-secondary" style={{ margin: "10px" }}>
								{coccasioneIcon}
							</Button>
						</OverlayTrigger>
					</div>
					<hr />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary">Pubblica</Button>
				</Modal.Footer>
			</Modal>

			{/* Modale per gli eventi */}
			<Modal show={showEventModal} onHide={handleCloseEventModal}>
				<Modal.Header closeButton>
					<Modal.Title>Crea un evento</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: "100%" }}>
					<h5>Crea un evento</h5>

					<img
						src={eventImage}
						alt=""
						style={{ maxHeight: "300px", maxWidth: "100px" }}
					/>

					<p className="mt-3"> Tipo di evento </p>
					<Form>
						{[, "radio"].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									inline
									label="Online"
									name="group1"
									// type={type}
									id={`inline-${type}-1`}
								/>
								<Form.Check
									inline
									label="Offline"
									name="group1"
									// type={type}
									id={`inline-${type}-2`}
								/>
								<p className="mt-2">Nome evento*</p>
								<Form.Control type="text" placeholder="Nome evento*" />
								<p className="mt-2">Ora evento*</p>
								<Form.Control type="text" placeholder="Ora evento*" />
								<p className="mt-2">Ora inizio*</p>
								<Form.Control type="text" placeholder="Ora inizio*" />
								<p className="mt-2">Link esterno dell’evento</p>
								<Form.Control
									type="text"
									placeholder="Link esterno dell’evento"
								/>
								<p className="mt-2">Descrizione </p>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
							</div>
						))}
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleCloseEventModal}>
						Chiudi
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Secondo Modale */}
			<Modal show={showSecondModal} onHide={handleCloseSecondModal}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<ListGroup>
						<ListGroup.Item className="mx-2">
							{" "}
							<MdSaveAlt className="mx-3" />
							Salva
						</ListGroup.Item>
						<ListGroup.Item className="mx-2">
							{" "}
							<IoIosLink className="mx-3" />
							Copia link al post{" "}
						</ListGroup.Item>
						<ListGroup.Item className="mx-2">
							{" "}
							<FaRegEyeSlash className="mx-3" />
							Non voglio vederlo
						</ListGroup.Item>
						<ListGroup.Item className="mx-2">
							{" "}
							<MdBlockFlipped className="mx-3" /> Smetti di seguire{" "}
						</ListGroup.Item>
						<ListGroup.Item className="mx-2">
							{" "}
							<FaFlag className="mx-3" />
							Segnala post
						</ListGroup.Item>
					</ListGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleCloseSecondModal}>
						Chiudi
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Post */}
			{showPost && (
				<div className="center-content">
					<Card className="post-card">
						<Card.Header className="d-flex justify-content-between align-items-center">
							<div className="profile-info d-flex align-items-center">
								<img
									src="https://placedog.net/30"
									alt="Profilo"
									className="profile-image"
								/>
								<div className="ml-2">
									<span className="profile-name">Nome Utente</span>
									<br />
									<span className="followers-count">
										Follower: {Math.floor(Math.random() * 1000)}
									</span>
								</div>
							</div>
							<div className="post-options">
								<MdMoreHoriz onClick={handleSecondCardOptions} />
								<MdClose onClick={handleDeletePost} className="ml-2" />
							</div>
						</Card.Header>

						<Card.Body>
							<img src="https://placedog.net/700" alt="Post" />
							<div>{Math.floor(Math.random() * 100)}</div>
						</Card.Body>

						<Card.Footer>
							<div className="post-actions text-center d-flex justify-content-between">
								<button className="btn-like btn-no-border  btn-icon-extra-small">
									{likeIcon} Consiglia
								</button>
								<button
									className="btn-comment btn-no-border  btn-icon-extra-small"
									onClick={handleShowCommentSection}
								>
									{commentIcon}
									Commenta
								</button>
								<button className="btn-share btn-no-border  btn-icon-extra-small">
									{arrowCircle}
									Diffondi il post
								</button>
								<button className="btn-share btn-no-border  btn-icon-extra-small">
									{inviaIcon}
									Invia
								</button>
							</div>
						</Card.Footer>
					</Card>
					{/* Sezione commenti */}
					{showCommentSection && (
						<Card className="comment-section">
							<Card.Body>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Commenta</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
								<Button variant="primary" size="sm" className="mt-2">
									<IoIosSend /> Invia
								</Button>
							</Card.Body>
						</Card>
					)}
				</div>
			)}
		</div>
	);
};

export default Posts;
