import StarRating from "./StarRating";
import { IoTrash } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Comment, CommentDef } from "../intefaces";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getCommentAction, getUserAction } from "../redux/actions";

interface ReviewProps {
	review: CommentDef;

	// setUpdate?: () => void;
	// update: boolean;
}
function SingleComment({ review }: ReviewProps) {
	const { comment, rate, author } = review;
	const profileInfo = useAppSelector((state) => state.profile.me);
	// const commentInfo = useAppSelector((state) => state.profile.comment);
	// const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(getUserAction());
	// 	dispatch(getCommentAction(profileInfo._id));
	// 	console.log("comments", commentInfo);
	// }, [profileInfo._id]);

	return (
		<div className="review-container" data-testid="review">
			<div className="review-body">
				<StarRating rating={parseInt(rate)} canChange={false} />
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
