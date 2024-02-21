import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const News = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} className="my-2">
						<Card>
							<Card.Title className=" px-3 pt-4 fs-6 d-flex justify-content-between">
								LinkedIn Notizie{" "}
								<span>
									<i className="bi bi-info-square-fill"></i>
								</span>
							</Card.Title>
							<Card.Body className="ps-1 pe-3">
								<ul className="">
									<li>
										<h6 className=" text-truncate ">
											Verso una pubblica amministrazioneeeeeeeeeeeee
										</h6>
										<p>19 ore fa</p>
									</li>
									<li>
										<h6 className=" text-truncate ">
											Come se la passano gli orsi polari
										</h6>
										<p>1 giorno fa</p>
									</li>
									<li>
										<h6 className=" text-truncate ">
											Disastro in JS con querySelector
										</h6>
										<p>1 giorno fa</p>
									</li>
									<li>
										<h6 className=" text-truncate ">
											Lo sviluppo del frontender alpha
										</h6>
										<p>17 ore fa</p>
									</li>
									<li>
										<h6 className=" text-truncate ">
											Di sicuro non farò queste sezioni in azienda
										</h6>
										<p>4 giorni fa</p>
									</li>
								</ul>
							</Card.Body>

							<Button className=" text-start ps-md-5 py-3 fw-semibold border-top border border-0 customButton w-100">
								Vedi altro
								{/*  mattia prendi l'icona da linkedIN originale pls  */}
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default News;
