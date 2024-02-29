import StarRating from "./StarRating";
import { IoTrash } from "react-icons/io5";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Comment, CommentDef } from "../intefaces";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getUserAction } from "../redux/actions";

interface ReviewProps {
	comment: CommentDef;
}
function SingleComment({ comment }: ReviewProps) {
	// const { comment, rate, author } = comment;
	const profileInfo = useAppSelector((state) => state.profile.me);
	// const commentInfo = useAppSelector((state) => state.profile.comment);
	// const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(getUserAction());
	// 	dispatch(getCommentAction(profileInfo._id));
	// 	console.log("comments", commentInfo);
	// }, [profileInfo._id]);
	console.log("comment", comment);

	return (
		<div className="review-container" data-testid="review">
			<Image
				src={profileInfo.image}
				roundedCircle
				className="mx-3"
				width={50}
				height={50}
			/>
			<div className="review-body p-2">
				<StarRating rating={parseInt(comment.rate)} canChange={false} />
				<div className="text-wrap w-100 fw-bold">{comment.author}</div>
				<div className="text-wrap w-100">{comment.comment}</div>
			</div>
			{/* <Button variant="danger"> */}
			{/* <IoTrash />
			</Button> */}
		</div>
	);
}

export default SingleComment;
