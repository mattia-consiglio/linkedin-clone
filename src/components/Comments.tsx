import React, { useState, useEffect } from "react";
import { Button, Form, Image, Row, Col } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";
import SingleComment from "./Comment";
import StarRating from "./StarRating";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
	getAllUserAction,
	getCommentAction,
	getUserAction,
} from "../redux/actions";

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

const Comments = ({ comments }: { comments: any[] }) => {
	const [value, setValue] = useState("");
	const [rating, setRating] = useState(0);
	const profileInfo = useAppSelector((state) => state.profile.me);
	const comment = useAppSelector((state) => state.profile.comment);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserAction());
		dispatch(getCommentAction(profileInfo._id));
		console.log("comments", comments);
	}, [profileInfo._id]);

	return (
		<Form.Group
			className="mt-3 mr-3 mx-2"
			controlId="exampleForm.ControlTextarea1"
		>
			<Row className="mt-2">
				<Col>
					<div className="d-flex align-items-center">
						<Image
							src="https://www.placedog.net/30"
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
								placeholder="Normal text"
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
						>
							{inviaIcon} Pubblica
						</Button>
					)}
				</Col>
			</Row>
			<Row className="align-items-center mt-4 ">
				<Col xs={6} className="d-flex align-items-center">
					<div className="d-flex align-items-center">
						<Image
							src={profileInfo.image}
							roundedCircle
							className="mx-3"
							width={50}
							height={50}
						/>
						<SingleComment
							review={{
								comment: "Commento",
								author: "Giorgio",
								rate: "4",
							}}
						/>
					</div>
				</Col>
			</Row>
		</Form.Group>
	);
};

export default Comments;
