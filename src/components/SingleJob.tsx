import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleJobDetails from "./SingleJobDetails";

function SingleJob() {
	return (
		<>
			<Container className="">
				<Row className="justify-content-center  hoverColor">
					<Col xs={12} md={1} className="mt-2">
						{" "}
						<img
							src="http://placekitten.com/200"
							alt="logo_azienda"
							width={50}
							height={50}
						/>
					</Col>
					<Col xs={12} md={10} className="mt-2">
						<h6 className="text-primary mb-0">PlaceJobName</h6>
						<p className="mb-0">placeJobInfo</p>
						<p className="opacity-75 littleFont">placeJobLocation</p>
						<p className="littleFont opacity-75 mb-2">
							Promosso <i className="bi bi-dot"></i>{" "}
							<span className="text-success fw-semibold">
								{" "}
								{Math.floor(Math.random() * 20)} candidati{" "}
							</span>{" "}
							<i className="bi bi-dot"></i>{" "}
							<span>
								<img
									width={13}
									height={13}
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
									alt=""
								/>
							</span>{" "}
							Candidatura semplice
						</p>
					</Col>
					<Col xs={1} className="mt-2 ">
						<i className="bi bi-x fs-2"></i>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SingleJob;
