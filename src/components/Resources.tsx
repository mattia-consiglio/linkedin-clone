import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Resources = () => {
	return (
		<Container className="my-3">
			<Row>
				<Col className="p-0">
					<Card>
						<Card.Body>
							<Card.Title className="mt-3 mb-0">Risorse</Card.Title>

							<p className="opacity-75">
								<i className="bi bi-eye-fill"></i> Solo per te
							</p>

							<Col xs={12} className="border-bottom mb-3">
								<i className="bi bi-broadcast-pin"></i>{" "}
								<span className="fw-bold ">
									Modalità creazione di contenuti{" "}
									<Button className="smallButton" size="sm">
										No
									</Button>
								</span>
								<p className="ps-4">
									Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
									accedi agli strumenti di creazione.
								</p>
							</Col>
							<Col xs={12}>
								<i className="bi bi-people-fill me-1"></i>{" "}
								<span className="fw-bold ">La mia rete</span>
								<p className="ps-4">
									Salva e gestisci i tuoi collegamenti e interessi.
								</p>
							</Col>
						</Card.Body>
						<Button className="fw-semibold border-top border border-0 customButton">
							Mostra tutte le risorse ({Math.floor(Math.random() * 10)}){" "}
							<i className="bi bi-arrow-right"></i>
						</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
export default Resources;
