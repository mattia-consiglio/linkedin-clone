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
		<Row className="flex-column justify-content-center align-items-between">
			<Col>
				<img
					className="rounded-top-3 w-100"
					src="https://placekitten.com/200/50"
					alt="gatto bg"
				/>
			</Col>
			<Col>
				<Row className="justify-content-center">
					<Col>Ciao</Col>
					<Col>Ciao</Col>
				</Row>
				<Row className="justify-content-center">
					<Col>Ciao</Col>
				</Row>
				<Row className="justify-content-center">
					<Col>Ciao</Col>
				</Row>
				<Row className="justify-content-center">
					<Col>Ciao</Col>
				</Row>
			</Col>
			<Col>
				<Row>
					<Col>
						<div className="text-center bg-info rounded-3 mb-2">Ciao</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
