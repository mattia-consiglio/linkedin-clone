import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Analyses = () => {
	return (
		<Row>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className="mt-3 mb-0">Analisi</Card.Title>

						<p className="opacity-75">
							<i className="bi bi-eye-fill"></i> Solo per te
						</p>

						<Row>
							<Col xs={12} md={4} className="d-flex ">
								<Col md={1}>
									<i className="bi bi-people-fill me-2"></i>
								</Col>
								<Col md={11}>
									<span className="fw-bold ">
										{" "}
										{Math.floor(Math.random() * 100)} visualizzazioni del
										profilo
									</span>
									<p>Scopri chi ha visitato il tuo profilo.</p>
								</Col>
							</Col>

							<Col xs={12} md={4} className="d-flex">
								<Col md={1}>
									<i className="bi bi-bar-chart-line-fill me-2"></i>
								</Col>
								<Col md={11}>
									<span className="fw-bold ">
										{" "}
										{Math.floor(Math.random() * 100)} impressioni del post
									</span>
									<p>Scopri chi sta interagendo con i tuoi post.</p>
								</Col>
							</Col>
							<Col xs={12} md={4} className="d-flex">
								<Col xs={1}>
									<i className="bi bi-search"></i>{" "}
								</Col>
								<Col xs={11}>
									<span className="fw-bold">
										{" "}
										{Math.floor(Math.random() * 100)} comparse nei motori di
										ricerca
									</span>
									<p>vedi quante volte compari nei risultati di ricerca</p>
								</Col>
							</Col>
						</Row>
					</Card.Body>
					<Button
						variant=""
						className="fw-semibold border-top border border-0 customButton"
					>
						Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
					</Button>
				</Card>
			</Col>
		</Row>
	);
};
export default Analyses;
