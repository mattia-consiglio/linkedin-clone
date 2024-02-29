import { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import eventImage from "../assets/img/Screenshot 2024-02-21 123701.png";
import { contenutiIcon, eventIcon, artIcon, coccasioneIcon } from "../icons";
import { useAppDispatch, useAppSelector } from "../redux/store";
import SinglePost from "./Post";
import {
	getPostsAction,
	postPostAction,
	deletePostAction,
	getCommentsAction,
} from "../redux/actions/posts";
const Posts = () => {
	const [showModal, setShowModal] = useState(false);
	const [showEventModal, setShowEventModal] = useState(false);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();

	const profileInfo = useAppSelector((state) => state.profile.me);
	// const profileAllInfo = useAppSelector((state) => state.profile.allUsers);

	const postInfo = useAppSelector((state) => state.posts.posts);
	const [text, setText] = useState("");

	useEffect(() => {
		dispatch(getPostsAction(profileInfo._id));
		dispatch(getCommentsAction());
	}, [profileInfo._id]); //controlla param postInfo per dipendenze, per far sparire commento cancellato senza ricaricare pagina

	const handleAddPost = () => {
		dispatch(postPostAction(profileInfo._id, text));
	};

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
							onClick={() => setShowEventModal(true)}
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
								onClick={() => setShowEventModal(true)}
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
			<Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
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
					<Button
						variant="outline-secondary"
						onClick={() => setShowEventModal(false)}
					>
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
