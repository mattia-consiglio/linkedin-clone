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
					<Col xs={12} md={3} className="my-2">
						<Card>
							{" "}
							<div className="">
								<Card.Img
									className="z-10 position-relative "
									variant="top"
									src="http://placekitten.com/200"
									height={100}
								/>
								<img
									className="fotoProfiloSide rounded-circle border border-white border-3 z-11 position-absolute top-50 start-50 translate-middle"
									src="http://placekitten.com/200"
									alt="bg profilo"
								/>
							</div>
							<Card.Body className="p-0 mt-4 ">
								<Card.Title className="text-center px-2 pt-4">
									PlaceNameProfile
								</Card.Title>
								<Card.Text className="text-center px-2">
									PlaceAboutProfile
								</Card.Text>
								<hr />
								<div className=" px-3 d-flex  justify-content-between">
									<p className="mb-2">Visitatori del profilo</p>
									<span className="text-primary fw-semibold ">
										{Math.floor(Math.random() * 100)}
									</span>
								</div>
								<div className=" px-3 d-flex  justify-content-between">
									<p className="mb-2">Impressioni del post</p>
									<span className="text-primary fw-semibold ">
										{Math.floor(Math.random() * 1000)}
									</span>
								</div>
								<hr />
								<div className=" px-3 ">
									<p className="mb-0">
										Accedi a strumenti e informazioni in esclusiva
									</p>
									<p className="fw-semibold">Prova Premium per 0 EUR</p>
								</div>

								<Button className=" text-start py-3 fw-semibold border-top border border-0 customButton w-100">
									<i className="bi bi-bookmark-fill"></i> I miei elementi
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<LittleLeftList />
				</Row>
				<Row>
					<News />
				</Row>
				<Row>
					<MiniFooter />
				</Row>
			</Container>
		</>
	);
};
export default SideProfile;
