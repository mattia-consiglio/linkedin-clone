import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
	likeIcon,
	commentIcon,
	arrowCircle,
	inviaIcon,
	circleLikeIcon,
} from "../icons";
import Comments from "./Comments";
import { IoIosLink } from "react-icons/io";
import { MdClose, MdMoreHoriz, MdSaveAlt } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { Post } from "../intefaces";
import { useAppDispatch, useAppSelector } from "../redux/store";
// import EditModal from "./ModalPostTextUpdate";
import EditModal from "./EditModal";
import { deletePostAction } from "../redux/actions/posts";

interface PostProps {
	post: Post;
}

const SinglePost = ({ post }: PostProps) => {
	const profileInfo = useAppSelector((state) => state.profile.me);
	const postInfo = useAppSelector((state) => state.posts.posts);
	const comments = useAppSelector((state) => state.posts.comments);
	const [showPost, setShowPost] = useState(true);
	const [showCommentSection, setShowCommentSection] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const [isUserPost, setIsUserPost] = useState(false);
	const userId = profileInfo._id;
	const [showModal, setShowModal] = useState(false);
	const dispatch = useAppDispatch();

	const [randomNumbers, setRandomNumbers] = useState({
		follower: Math.floor(Math.random() * 1000),
		like: Math.floor(Math.random() * 1000),
	});

	const handleShowCommentSection = () => {
		setShowCommentSection(!showCommentSection);
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
		dispatch(deletePostAction(id));
	};

	const addPostLike = () => {
		setRandomNumbers((prevState) => ({
			...prevState,
			like: prevState.like + 1,
		}));
	};

	return (
		<>
			{showPost && (
				<div key={post._id} className="center-content">
					<Card className="post-card w-100 mt-3">
						<Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
							<div className="profile-info d-flex align-items-center">
								<img
									src={profileInfo.image}
									alt="Profilo"
									className="profile-image"
								/>
								<div className="ml-2 ">
									<span className="profile-name">{post.username}</span>
									<br />
									<span className="followers-count ">
										Follower: {randomNumbers.follower}
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
													<EditModal
														show={showModal}
														setShowModal={setShowModal}
														postId={post._id}
													/>
													<ListGroup.Item
														onClick={() => setShowModal(true)}
														className="mx-2"
														action
													>
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

						<Card.Body className="pt-2 px-0">
							<h4 className="fsTextPost pb-2 px-3">{post.text}</h4>
							{post?.image && (
								<img className="img-fluid w-100" src={post.image} alt="Post" />
							)}
							<div className="d-flex align-items-center ">
								{circleLikeIcon}
								{randomNumbers.like}
							</div>
						</Card.Body>

						<Card.Footer className="bg-white">
							<div className="post-actions text-center d-flex justify-content-between ">
								<button
									className="btn-like btn-no-border  btn-icon-extra-small bg-white cardButtons"
									onClick={addPostLike}
								>
									{likeIcon} Consiglia
								</button>
								<button
									className="btn-comment btn-no-border  btn-icon-extra-small bg-white cardButtons"
									onClick={handleShowCommentSection}
								>
									{commentIcon}
									Commenta
								</button>
								<button className="btn-share btn-no-border  btn-icon-extra-small bg-white cardButtons">
									{arrowCircle}
									Diffondi il post
								</button>
								<button className="btn-share btn-no-border  btn-icon-extra-small bg-white cardButtons">
									{inviaIcon}
									Invia
								</button>
							</div>
							{showCommentSection && <Comments postId={post._id} />}
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
