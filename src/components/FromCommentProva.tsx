import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getUserAction } from "../redux/actions";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
	deletePostAction,
	getPostsAction,
	postPostAction,
	putPostAction,
} from "../redux/actions/posts";

const FormComment = (
	{
		// 	setShow,
		// }: {
		// 	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	},
) => {
	const dispatch = useAppDispatch();
	const profileInfo = useAppSelector((state) => state.profile.me);
	const commentInfo = useAppSelector((state) => state.posts.comments);
	const [text, setText] = useState("");

	useEffect(() => {
		dispatch(getUserAction());
		dispatch(getPostsAction(profileInfo._id));
	}, [profileInfo._id]);

	const handleAddPost = () => {
		dispatch(postPostAction(profileInfo._id, text));
	};

	const handleDeletePost = (id: string) => {
		dispatch(deletePostAction(id));
	};

	const handleEditPost = (id: string, text: string) => {
		dispatch(putPostAction(id, text));
	};

	return (
		<>
			<Row className="justify-content-center align-items-center mt-5 pb-3">
				<Col xs={12} className="text-center">
					<h1>PROVA COMMENT</h1>
				</Col>
				<Col xs={8}>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>TEXT</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter text"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Col className="text-center">
							<Button
								onClick={handleAddPost}
								className="m-2"
								variant="success"
								type="submit"
							>
								CREATE
							</Button>
						</Col>
					</Form>
				</Col>
				<Col xs={12} className="mt-4">
					{commentInfo.slice(-15).map((comment) => (
						<Row
							key={comment._id}
							className="text-center my-2 justify-content-center align-items-center "
						>
							<hr />
							<Col md={4}>{comment.comment}</Col>
							<Col md={4}>
								<Button
									onClick={() => handleDeletePost(comment._id)}
									className="m-2"
									variant="danger"
									type="submit"
								>
									DELETE
								</Button>{" "}
								{/* {profileInfo._id === comment._id ? ( */}
								<Button
									onClick={() => handleEditPost(comment._id, text)}
									className="m-2"
									variant="primary"
									type="submit"
								>
									PUT
								</Button>
								{/* // ) : (
								// 	""
								// )} */}
							</Col>
							<hr />
						</Row>
					))}
				</Col>
			</Row>
		</>
	);
};

export default FormComment;
