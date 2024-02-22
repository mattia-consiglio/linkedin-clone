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
import {
	contenutiIcon,
	eventIcon,
	artIcon,
	coccasioneIcon,
	likeIcon,
	commentIcon,
	arrowCircle,
	inviaIcon,
} from "../icons";
import Comments from "./Comments";
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

	return (
		<div>
			<div className="center-content">
				<div className="card w-100">
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
					<div className="post-actions text-center d-flex justify-content-between">
						<Button
							onClick={handleChooseFile}
							className="btn-one btn-no-border btn-icon-extra-small mt-3"
							variant="outline-secondary"
						>
							<span className="icon-container">{contenutiIcon}</span> Contenuti
							multimediali
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

			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				style={{ display: "none" }}
			/>
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
					<Card className="post-card w-100 mt-3">
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
							{showCommentSection && <Comments comments={[]} />}
						</Card.Footer>
					</Card>
					{/* Sezione commenti */}

					{/* <Card className="comment-section w-100">
							<Card.Body>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Commenta</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
								<Button variant="primary" size="sm" className="mt-2">
									<IoIosSend /> Invia
								</Button>
							</Card.Body>
						</Card> */}
				</div>
			)}
		</div>
	);
};

export default Posts;
