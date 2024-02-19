import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Section = () => {
	return (
		<>
			<Container className="my-3">
				<Row className="mb-3">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="mt-3 mb-0">Analisi</Card.Title>

								<p className="opacity-75">
									<i className="bi bi-eye-fill"></i> Solo per te
								</p>

								<Row>
									<Col xs={12} md={4}>
										<i className="bi bi-people-fill me-1"></i>{" "}
										<span className="fw-bold ">
											{" "}
											{Math.floor(Math.random() * 100)} visualizzazioni del
											profilo
										</span>
										<p className="ps-4">
											Scopri chi ha visitato il tuo profilo.
										</p>
									</Col>

									<Col xs={12} md={4}>
										<i className="bi bi-bar-chart-line-fill"></i>{" "}
										<span className="fw-bold ">
											{" "}
											{Math.floor(Math.random() * 100)} impressioni del post
										</span>
										<p className="ps-4">
											Scopri chi sta interagendo con i tuoi post.
										</p>
									</Col>
									<Col xs={12} md={4}>
										<i className="bi bi-search"></i>{" "}
										<span className="fw-bold ">
											{" "}
											{Math.floor(Math.random() * 100)} comparse nei motori di
											ricerca
										</span>
										<p className="ps-4">
											vedi quante volte compari nei risultati di ricerca
										</p>
									</Col>
								</Row>
							</Card.Body>
							<Button className="fw-semibold border-top border border-0 customButton">
								Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
							</Button>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
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
										Fatti scoprire, metti in risalto i contenuti sul tuo profilo
										e accedi agli strumenti di creazione.
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
		</>
	);
};
export default Section;
