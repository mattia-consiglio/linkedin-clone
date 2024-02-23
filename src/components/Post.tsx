import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { likeIcon, commentIcon, arrowCircle, inviaIcon } from "../icons";
import Comments from "./Comments";
import { IoIosLink } from "react-icons/io";
import { MdClose, MdMoreHoriz, MdSaveAlt } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { Profileinfo } from "./Profileinfo";
import { Post, User } from "../intefaces";
import { useAppDispatch, useAppSelector } from "../redux/store";
// import EditModal from "./ModalPostTextUpdate";
import { deleteCommentsAction, putCommentsAction } from "../redux/actions";
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap";
import EditModal from "./EditModal";

interface PostProps {
	post: Post;
}

const SinglePost = ({ post }: PostProps) => {
	const profileInfo = useAppSelector((state) => state.profile.me);
	const postInfo = useAppSelector((state) => state.profile.post);
	const [showPost, setShowPost] = useState(true);
	const [showCommentSection, setShowCommentSection] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const [isUserPost, setIsUserPost] = useState(false);
	const userId = profileInfo._id;
	const [showModal, setShowModal] = useState(false);
	const dispatch = useAppDispatch();
	// const allUsers = useAppSelector((state) => state.profile.allUsers);
	// console.log(allUsers);

	const handleShowCommentSection = () => {
		setShowCommentSection(true);
	};

	const handleDeletePost = () => {
		setShowPost(false);
	};

	useEffect(() => {
		setIsUserPost(post.user._id === userId);
	}, [post.user._id, userId]);

	const handleClose = () => {
		console.log("CHIUDI MODAL");
		setShowModal(false);
	};

	const DeletePost = (id: string) => {
		dispatch(deleteCommentsAction(id));
	};

	return (
		<>
			{showPost && (
				<div key={post._id} className="center-content">
					<Card className="post-card w-100 mt-3">
						<Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
							<div className="profile-info d-flex align-items-center">
								<img src={post.image} alt="Profilo" className="profile-image" />
								<div className="ml-2">
									<span className="profile-name">{post.username}</span>
									<br />
									<span className="followers-count">
										Follower: {Math.floor(Math.random() * 1000)}
									</span>
								</div>
							</div>
							<div className="post-options">
								<div className="position-relative">
									<MdMoreHoriz
										className="cursor-pointer"
										onClick={() => setShowMoreOptions(!showMoreOptions)}
									/>
									{showMoreOptions && (
										<ListGroup className="position-absolute cardGroupOptions">
											{isUserPost && (
												<>
													<ListGroup.Item
														onClick={() => setShowModal(true)}
														className="mx-2"
														action
													>
														<EditModal
															show={showModal}
															setShowModal={setShowModal}
															postId={post._id}
														/>{" "}
														<MdSaveAlt className="mx-3" />
														Modifica
													</ListGroup.Item>
													<ListGroup.Item
														onClick={() => DeletePost(post._id)}
														className="mx-2"
														action
													>
														{" "}
														<MdSaveAlt className="mx-3" />
														Elimina
													</ListGroup.Item>
												</>
											)}
											<ListGroup.Item className="mx-2" action>
												{" "}
												<MdSaveAlt className="mx-3" />
												Salva
											</ListGroup.Item>
											<ListGroup.Item action className="mx-2">
												{" "}
												<IoIosLink className="mx-3" />
												Copia link al post{" "}
											</ListGroup.Item>
											<ListGroup.Item action className="mx-2">
												{" "}
												<FaRegEyeSlash className="mx-3" />
												Non voglio vederlo
											</ListGroup.Item>
											<ListGroup.Item action className="mx-2">
												{" "}
												<MdBlockFlipped className="mx-3" /> Smetti di seguire{" "}
											</ListGroup.Item>
											<ListGroup.Item action className="mx-2">
												{" "}
												<FaFlag className="mx-3" />
												Segnala post
											</ListGroup.Item>
										</ListGroup>
									)}
								</div>
								<MdClose onClick={handleDeletePost} className="ml-2" />
							</div>
						</Card.Header>

						<Card.Body className="pt-2">
							<h4 className="fsTextPost pb-2">{post.text}</h4>
							{post?.image && (
								<img className="img-fluid" src={post.image} alt="Post" />
							)}
							<div>{Math.floor(Math.random() * 100)}</div>
						</Card.Body>

						<Card.Footer className="bg-white">
							<div className="post-actions text-center d-flex justify-content-between ">
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
			{!showPost && <></>}
		</>
	);
};

export default SinglePost;
