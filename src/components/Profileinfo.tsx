import { RootState, useAppSelector } from "../redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";

export const Profileinfo = () => {
	const dispatch = useDispatch();
	const profileInfo = useAppSelector((state) => state.profile.me);

	// dispatch(getUserAction("me"));
	return (
		<Row className="flex-column">
			<Col></Col>
			<Col></Col>
			<Col></Col>
		</Row>
	);
};
