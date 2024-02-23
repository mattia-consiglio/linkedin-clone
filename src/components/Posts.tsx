import React, { useState, useRef, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
	deleteCommentsAction,
	getCommentAction,
	// getAllUserAction,
	getPostAction,
	getUserAction,
	postPostAction,
	putCommentsAction,
} from "../redux/actions";
import SinglePost from "./Post";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
const Posts = () => {
	const [showModal, setShowModal] = useState(false);
	const [showEventModal, setShowEventModal] = useState(false);

	const [showSecondModal, setShowSecondModal] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();

	const profileInfo = useAppSelector((state) => state.profile.me);
	// const profileAllInfo = useAppSelector((state) => state.profile.allUsers);

	const postInfo = useAppSelector((state) => state.profile.post);
	const [text, setText] = useState("");

	const comments = useAppSelector((state) => state.profile.comment);

	useEffect(() => {
		dispatch(getCommentAction(profileInfo._id));
		console.log("comments", comments);
	}, [profileInfo._id]);

	useEffect(() => {
		dispatch(getPostAction(profileInfo._id));
	}, [profileInfo._id]); //controlla param postInfo per dipendenze, per far sparire commento cancellato senza ricaricare pagina

	useEffect(() => {
		dispatch(getUserAction());
		dispatch(getPostAction(profileInfo._id));
	}, [profileInfo._id]);

	const handleAddPost = () => {
		dispatch(postPostAction(profileInfo._id, text));
	};

	const handleDeletePostDispatch = (id: string) => {
		dispatch(deleteCommentsAction(id));
	};

	// const handleEditPost = (id: string, text: string) => {
	// 	dispatch(putCommentsAction(id, text));
	// };

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

	const handleSecondCardOptions = () => {
		setShowSecondModal(true);
	};

	const handleCloseSecondModal = () => {
		setShowSecondModal(false);
	};

	return (
		<div>
			<div className="center-content">
				<div className="card w-100">
					<div
						style={{ borderBottom: "none", backgroundColor: "white" }}
						className="card-header mt-2"
					>
						<img
							src={profileInfo.image}
							alt="Profilo"
							className="profile-image"
						/>
						<Form.Control
							style={{ borderRadius: "25px" }}
							className="threeButtons py-2"
							type="text"
							id="inputPassword5"
							aria-describedby="passwordHelpBlock"
							onClick={handleShowModal}
							placeholder="Avvia un post"
						/>
					</div>
					<div className="post-actions text-center d-flex justify-content-between">
						<Button
							onClick={handleChooseFile}
							className="btn-one btn-no-border btn-icon-extra-small my-2 mx-3 threeButtons"
							variant=""
						>
							<span className="icon-container ">{contenutiIcon}</span> Contenuti
							multimediali
						</Button>

						<Button
							className="btn-two btn-no-border  btn-icon-extra-small  mx-3 my-2 threeButtons"
							variant=""
							onClick={handleShowEventModal}
						>
							<span className="icon-container">{eventIcon}</span> Evento
						</Button>
						<Button
							variant=""
							className="btn-three btn-no-border  btn-icon-extra-small  mx-3 my-2 threeButtons"
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
						src={profileInfo.image}
						alt="Profilo"
						className="profile-image"
					/>
					<Modal.Title>
						<h5>{profileInfo.username}</h5>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="d-flex flex-column align-items-center pt-4 ">
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Di cosa vorresti parlare?</Form.Label>
						<Form.Control
							style={{ width: "30em", height: "10em" }}
							as="textarea"
							rows={3}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
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
					<Button onClick={handleAddPost} variant="outline-secondary">
						Pubblica
					</Button>
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

			{/* Post */}
			{[...postInfo]
				.slice(-40)
				.sort((a, b) => {
					const aDate = new Date(a.createdAt).getTime();
					const bDate = new Date(b.createdAt).getTime();

					return bDate - aDate;
				})
				.map((post) => {
					return <SinglePost key={post._id} post={post} />;
				})}
		</div>
	);
};

export default Posts;
