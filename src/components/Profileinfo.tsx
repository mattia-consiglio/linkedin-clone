import { useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import { getUserAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";

export const Profileinfo = () => {
	const dispatch = useAppDispatch();
	const profileInfo = useAppSelector((state) => state.profile.me);
	useEffect(() => {
		dispatch(getUserAction("me"));
	}, []);

	// dispatch(getUserAction("me"));
	return (
		<Row className="flex-column">
			<Col></Col>
			<Col></Col>
			<Col></Col>
		</Row>
	);
};
