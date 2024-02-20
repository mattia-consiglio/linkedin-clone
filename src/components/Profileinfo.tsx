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
					src="https://placekitten.com/400/100"
					alt="bg profilo"
				/>
			</Col>
			<Col>
				<Row className="justify-content-between mx-3 mt-3">
					<Col>
						<img
							className="fotoProfilo rounded-circle border border-white border-4 z-4"
							src={profileInfo.image}
							alt={profileInfo.name + " " + profileInfo.surname}
						/>
					</Col>
					<Col className="text-end ">
						<i className="bi bi-pencil"></i>
					</Col>
				</Row>
				<Row className="justify-content-between align-items-center mx-3 mt-3">
					<Col xs={12} md={6} className="d">
						<Row className="me-5 w-100">
							<Col className="fw-bold fs-4 pe-0">
								{profileInfo.name + " " + profileInfo.surname}
							</Col>
							<Col className=" rounded-4 verificaOra px-0 fw-bold">
								<Row className="justify-content-evenly align-items-center">
									<Col xs={3} className="pe-0 text-center">
										<i className="bi bi-patch-check"></i>
									</Col>
									<Col className="px-0" xs={6}>
										Verifica ora
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col md={5} className="ms-5 fw-bold d-none d-md-inline">
						<Row className="justify-content-start align-items-center">
							<Col xs={8}>
								<img
									src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&amp;v=beta&amp;t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
									alt=""
									id="ember2358"
									className="logoIstruzioneAccount"
								/>
								EPICODE
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className="justify-content-center mx-3 flex-column">
					<Col>Web Developer</Col>
					<Col className="text-secondary">
						{profileInfo.area} -{" "}
						<span className="text-primary-linkedin-a">
							Informazioni di contatto
						</span>
					</Col>
					<Col>
						<a
							className="text-primary-linkedin-a"
							href="https://github.com/Perri-Alessandro"
						>
							https://github.com/Perri-Alessandro
						</a>
					</Col>
					<Col>
						<a className="text-primary-linkedin-a" href="">
							192 follower{" "}
						</a>
						-
						<a className="text-primary-linkedin-a" href="">
							{" "}
							189 collegamenti
						</a>
					</Col>
					<Col>
						<Row className=" my-2 mb-4 justify-content-start align-items-center ps-2">
							<Col
								xs={6}
								lg={2}
								className=" text-center bgLinkedin rounded-5 py-1 fw-bold px-1 me-1 mb-2 mb-lg-0"
							>
								Disponibile per
							</Col>
							<Col
								xs={10}
								lg={4}
								className=" text-center verificaOra rounded-5 py-1 fw-bold px-1 ms-1 me-1"
							>
								Aggiungi sezione del profilo
							</Col>
							<Col
								xs={1}
								className="d-none d-lg-inline altroButton text-center border border-secondary text-secondary rounded-5 py-1 fw-bold px-1 ms-1"
							>
								Altro
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col>
				<Row className="justify-content-around">
					<Col className="bgServiziOfferti rounded-2 mb-2" xs={5}>
						<Row className="flex-column justify-content-start my-3">
							<Col>
								<Row className="justify-content-between">
									<Col className="fw-bold">Servizi offerti</Col>
									<Col className="text-end">
										<i className="bi bi-pencil"></i>
									</Col>
								</Row>
							</Col>
							<Col>Sviluppare il mondo ...</Col>
							<Col className="text-primary-linkedin-a fw-bold">
								Mostra dettagli
							</Col>
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
										<i className="bi bi-x-lg"></i>
									</Col>
								</Row>
							</Col>
							<Col>sei tu che decidi chi può vedere questa informazione.</Col>
							<Col className="text-primary-linkedin-a fw-bold">Inizia</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
