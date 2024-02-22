import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import LittleLeftList from "./LittleLeftList";
import News from "./News";
import MiniFooter from "./MiniFooter";
const SideProfile = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} className="my-2">
						<Card>
							{" "}
							<div className="d-flex flex-column align-items-center">
								<Card.Img
									className="z-10 position-relative "
									variant="top"
									src="http://placekitten.com/200"
									height={100}
								/>
								<img
									className="fotoProfiloSide rounded-circle border border-white border-3 z-11 "
									src="http://placekitten.com/200"
									alt="bg profilo"
								/>
							</div>
							<Card.Body className="p-0 mt-4 ">
								<Card.Title className="text-center px-2 fs-6">
									PlaceNameProfile
								</Card.Title>
								<Card.Text className="text-center px-2 littleFont">
									PlaceAboutProfile
								</Card.Text>
								<hr />
								<div className=" px-3 d-flex  justify-content-between">
									<p className="mb-2 littleFont">Visitatori del profilo</p>
									<span className="text-primary fw-semibold littleFont">
										{Math.floor(Math.random() * 100)}
									</span>
								</div>
								<div className=" px-3 d-flex  justify-content-between">
									<p className="mb-2 littleFont">Impressioni del post</p>
									<span className="text-primary fw-semibold littleFont">
										{Math.floor(Math.random() * 1000)}
									</span>
								</div>
								<hr />
								<div className=" px-3 ">
									<p className="mb-0 littleFont">
										Accedi a strumenti e informazioni in esclusiva
									</p>
									<p className="fw-semibold littleFont">
										<span>
											<svg
												className="pe-1"
												style={{ width: "16px" }}
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												id="premium-chip-medium"
												aria-hidden="true"
												role="none"
												data-supported-dps="24x24"
											>
												<path
													d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
													fill="#f8c77e"
												></path>
												<path
													d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
													fill="#e7a33e"
												></path>
											</svg>
										</span>
										Prova Premium per 0 EUR
									</p>
								</div>

								<Button className=" text-start py-3 fw-semibold border-top border border-0 customButton w-100 littleFont">
									<i className="bi bi-bookmark-fill"></i> I miei elementi
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default SideProfile;
