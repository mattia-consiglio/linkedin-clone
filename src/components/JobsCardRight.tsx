import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Col } from "react-bootstrap";
import MiniFooter from "./MiniFooter";
import { CardColWrapper } from "./CardColWrapper";
import { useAppSelector } from "../redux/store";

const JobsCardRight = () => {
	const profileImg = useAppSelector((state) => state.profile.me.image);
	return (
		<>
			<CardColWrapper className="px-2 py-3">
				<h5 className="CardRighth5">Disponibile a lavorare</h5>
				<p>Consigliato in base alla tua attività</p>
				<div className="logo-recruiter">
					<h6>
						Mostra ai recruiter che sei disponibile per nuove opportunità di
						lavoro!
					</h6>
					<img className="profile-image" src={profileImg} alt="profile" />
				</div>
				<p>
					Aumenta le probabilità di trovare presto un lavoro con la cornice
					#OpenToWork: controlli tu chi la vede.
				</p>
				<Button className="fw-semibold  border border-1 customButton w-100 ">
					Inizia
				</Button>
			</CardColWrapper>
			<Col>
				<MiniFooter />
			</Col>
		</>
	);
};

export default JobsCardRight;
