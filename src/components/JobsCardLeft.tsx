import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { editPencilIcon, gearIcon, playRectagleIcon } from "../icons";

const JobsCardLeft = () => {
	return (
		<Col>
			<Row className="card px-3 py-4 row-gap-3 mb-3  ">
				<Col className="d-flex align-items-center column-gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						data-supported-dps="24x24"
						fill="currentColor"
						width="24"
						height="24"
						focusable="false"
					>
						<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
					</svg>
					<span className="fw-bold fs-14px">Le mie offerte di lavoro</span>
				</Col>
				<Col className="d-flex align-items-center column-gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						data-supported-dps="24x24"
						fill="currentColor"
						width="24"
						height="24"
						focusable="false"
					>
						<path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
					</svg>
					<span className="fw-bold fs-14px">Preferenze</span>
				</Col>
				<Col className="d-flex align-items-center column-gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						data-supported-dps="24x24"
						fill="currentColor"
						width="24"
						height="24"
						focusable="false"
					>
						<path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
					</svg>
					<span className="fw-bold fs-14px">Valutazione delle competenze</span>
				</Col>
				<Col className="d-flex align-items-center column-gap-2 ">
					{playRectagleIcon}
					<span className="fw-bold fs-14px">
						Indicazioni per chi cerca lavoro
					</span>
				</Col>
				<Col className="d-flex align-items-center column-gap-2 ">
					{gearIcon}
					<span className="fw-bold fs-14px">Impostazioni candidatura</span>
				</Col>
			</Row>

			<Button
				style={{ display: "flex", alignItems: "center" }}
				className="d-flex align-items-center w-100 rounded-pill "
				variant="outline-primary"
			>
				{editPencilIcon}
				<span className="flex-grow-1 fw-bold fs-14px">
					Pubblica <br />
					offerta grauita
				</span>
			</Button>
		</Col>
	);
};

export default JobsCardLeft;
