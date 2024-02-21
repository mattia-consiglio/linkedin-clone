import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Dropdown from "react-bootstrap/Dropdown";
const MiniFooter = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-center text-center w-50">
					<Col xs={12} className="my-2 ">
						{" "}
						Informazioni <span className="ms-3">Accessibilità</span>
					</Col>
				</Row>
				<Row className="justify-content-center text-center w-50">
					<Col xs={12} className="my-2 ">
						{" "}
						Centro assistenza <span className="ms-3">Privacy e condizioni</span>
					</Col>
				</Row>
				<Row className="justify-content-center text-center w-50">
					<Col xs={12} className="my-2 ">
						Opzioni per gli annunci pubblicitari
					</Col>
				</Row>
				<Row className="justify-content-center text-center w-50">
					<Col xs={12} className="my-2 ">
						{" "}
						Pubblicità <span className="ms-3">Servizi alle aziende</span>
					</Col>
				</Row>
				<Row className="justify-content-center text-center w-50">
					<Col xs={12} className="my-2 ">
						{" "}
						Scarica l'app LinkedIn <span className="ms-3">Altro</span>
					</Col>
				</Row>

				<Row className="justify-content-center w-50  ">
					<Col className="text-center">
						<img
							className="me-1"
							width={60}
							height={17}
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
							alt="linkedIn Logo"
						/>
						Team 4 Corporation &copy; 2024
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default MiniFooter;
