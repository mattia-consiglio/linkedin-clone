import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import MiniFooter from "./MiniFooter";
import { CardColWrapper } from "./CardColWrapper";

const JobsCardRight = () => {
	return (
		<>
			<CardColWrapper className="px-2 py-3">
				<h5 className="CardRighth5">Disponibile a lavorare</h5>
				<p>Consigliato in base alla tua attività</p>
				<div className="logo-recruiter">
					<h6>
						Mostra ai recruiter che sei <br /> disponibile per nuove <br />{" "}
						opportunità di lavoro
					</h6>
					<img className="profile-image" />
				</div>
				<p>
					Aumenta le probabilità di trovare presto un <br />
					lavoro con la cornice #OpenToWork: <br /> controlli tu chi la vede.
				</p>
				<button style={{ border: "none", background: "none" }}>
					Inizia
					<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
				</button>
			</CardColWrapper>
			<Col>
				<MiniFooter />
			</Col>
		</>
	);
};

export default JobsCardRight;
