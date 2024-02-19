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
					className="rounded-top-3 w-100 z-1"
					src="https://placekitten.com/200/56"
					alt="bg profilo"
				/>
			</Col>
			<Col>
				<Row className="justify-content-between">
					<Col>
						<img
							className="fotoProfilo ms-4 rounded-circle border border-white border-4 z-4"
							src="https://placedog.net/150/150"
							alt="foto profilo"
						/>
					</Col>
					<Col className="text-end me-3 mt-3">Biro</Col>
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
				<Row className="justify-content-evenly">
					<Col className="bgServiziOfferti rounded-2 mb-2" xs={5}>
						<Row className="flex-column justify-content-start my-3">
							<Col>
								<Row className="justify-content-between">
									<Col className="fw-bold">Servizi offerti</Col>
									<Col className="text-end">biro</Col>
								</Row>
							</Col>
							<Col>Sviluppare il mondo ...</Col>
							<Col className="text-primary fw-bold">Mostra dettagli</Col>
						</Row>
					</Col>
					<Col
						className="border bgServiziOf rounded-2 mb-2 d-none d-md-inline"
						xs={5}
					>
						<Row className="flex-column justify-content-start my-3">
							<Col>
								<Row className="justify-content-between">
									<Col xs={10} className="fw-bold">
										Mostra ai recruiter che sei disponibile a lavorare :
									</Col>
									<Col xs={1} className="text-end">
										X
									</Col>
								</Row>
							</Col>
							<Col>sei tu che decidi chi può vedere questa informazione.</Col>
							<Col className="text-primary fw-bold">Inizia</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
