import React, { useState, useEffect } from "react";
import { Button, Form, Image, Row, Col } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";
import SingleComment from "./SingleComment";
import StarRating from "./StarRating";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllUserAction, getUserAction } from "../redux/actions";
import { Comment } from "../intefaces";
import { getCommentsAction, postCommentAction } from "../redux/actions/posts";

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

const Comments = ({ postId }: { postId: string }) => {
	const [value, setValue] = useState("");
	const [rating, setRating] = useState(0);
	const profileInfo = useAppSelector((state) => state.profile.me);
	const comments = useAppSelector((state) => state.posts.comments).filter(
		(comment) => comment.elementId === postId,
	);
	const dispatch = useAppDispatch();

	const sendCommet = () => {
		dispatch(postCommentAction(postId, value, rating.toString()));
		setValue("");
		setRating(0);
	};

	return (
		<Form.Group
			className="mt-3 mr-3 mx-2"
			controlId="exampleForm.ControlTextarea1"
		>
			<Row className="mt-2">
				<Col>
					<div className="d-flex align-items-center">
						<Image
							src={profileInfo.image}
							roundedCircle
							className="mx-3 mt-3"
							width={50}
							height={50}
						/>
						<div className="flex-grow-1">
							<StarRating
								className="mb-2"
								rating={rating}
								canChange={true}
								setRating={setRating}
							/>
							<Form.Control
								onChange={(e) => setValue(e.target.value)}
								value={value}
								className="rounded-left rounded-right w-100"
								type="text"
								placeholder="Scrivi un commento"
							/>
						</div>
					</div>
				</Col>
			</Row>
			<Row className="mt-2">
				<Col>
					{value !== "" && (
						<Button
							variant="primary"
							size="sm"
							className="mt-2 mx-5 d-flex align-items-center rounded-pill"
							onClick={sendCommet}
						>
							{inviaIcon} Pubblica
						</Button>
					)}
				</Col>
			</Row>
			<Row className="align-items-center mt-4 ">
				<Col xs={12} className="d-flex align-items-center">
					<div className="w-100 ">
						{comments.map((comment) => (
							<SingleComment
								key={comment._id}
								comment={{
									comment: comment.comment,
									author: comment.author,
									rate: comment.rate,
								}}
							/>
						))}
					</div>
				</Col>
			</Row>
		</Form.Group>
	);
};

export default Comments;
