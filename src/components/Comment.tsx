import StarRating from "./StarRating";
import { IoTrash } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import React from "react";
import { Comment } from "../intefaces";
interface ReviewProps {
	review: Comment;

	// setUpdate?: () => void;
	// update: boolean;
}
function SingleComment({ review }: ReviewProps) {
	const { comment, rate, author } = review;

	return (
		<div className="review-container" data-testid="review">
			<div className="review-body">
				<StarRating rating={3} canChange={false} />
				<div className="text-wrap w-100">{author}</div>
				<div className="text-wrap w-100">{comment}</div>
			</div>
			{/* <Button variant="danger"> */}
			{/* <IoTrash />
			</Button> */}
		</div>
	);
}

export default SingleComment;
