import { Container, Row, Col } from "react-bootstrap";
import {
	curvedRightArrow,
	jobBag,
	workPlaceDip,
	verifiedCandidate,
	lampIcon,
	smallLinkedIn,
} from "../icons";
import { Job } from "../redux/reducers/jobs";

const random = (): number => {
	return Math.ceil(Math.random() * 3);
};

const SingleJobDetails = ({ job }: { job: Job }) => {
	return (
		<>
			<Container>
				<Row className="d-flex flex-column pt-3">
					<Col className="d-flex flex-row justify-content-between ">
						<h3 className="mb-1"> {job.title} </h3>{" "}
						<div>
							{curvedRightArrow}
							<i className=" fs-3 bi bi-three-dots mx-3"></i>
						</div>
					</Col>
					<Col>
						<p>
							{job.company_name} <i className="bi bi-dot"></i>{" "}
							{job.candidate_required_location} <i className="bi bi-dot"></i>{" "}
							Pubblicata: {random()} {random() === 1 ? "mese fa" : "mesi fa"}
							<i className="bi bi-dot"></i>{" "}
							<span className="text-success fw-semibold">
								{Math.floor(Math.random() * 50)} candidati
							</span>
						</p>{" "}
						<p>
							{jobBag}
							{job.category} <i className="bi bi-dot"></i> A tempo pieno
						</p>
						<p>
							{workPlaceDip}
							{Math.ceil(Math.random() * 8)} - {Math.floor(Math.random() * 100)}{" "}
							dipendenti
						</p>
						<p>
							{verifiedCandidate}
							Solitamente le candidature vengono esaminate entro {random()}{" "}
							giorni{" "}
						</p>
						<p>
							{" "}
							{lampIcon}
							Visualizza i trend di assunzione recentiper Adecco.{" "}
							<u>Prova Premium per 0 EUR</u>
						</p>{" "}
						<div className="d-flex align-items-center">
							<div
								style={{ width: "15em" }}
								className=" text-center bgLinkedin rounded-5 py-2 fw-bold px-1 me-1 mb-2 mb-lg-0  "
							>
								<span style={{ color: "white" }}> {smallLinkedIn}</span>
								Candidatura semplice
							</div>
							<div
								style={{ width: "5em" }}
								className=" text-center verificaOra rounded-5 py-1 fw-bold px-1 ms-1 me-1 py-2 border-2"
							>
								Salva
							</div>
						</div>
						<h3 className="mt-5">Informazioni sull'offerta di lavoro</h3>
						<div dangerouslySetInnerHTML={{ __html: job.description }} />
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default SingleJobDetails;
