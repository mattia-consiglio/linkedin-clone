import { Container, Row, Col } from "react-bootstrap";
import Section from "./Section";
import { Profileinfo } from "./Profileinfo";
import Experience from "./Experience";
import AsidePortrait from "./AsidePortrait";
import Button from "react-bootstrap/Button";
const Profile = () => {
	return (
		<Container>
			<Row className="flex-column flex-md-row justify-content-center align-items-top py-3 g-2 mx-2">
				<Col xs={12} lg={8} className="me-0 me-md-3">
					<Row className=" flex-column g-2">
						<Col className="border rounded-3 bg-white p-0">
							<Profileinfo />
						</Col>
						<Col className="border rounded-3 bg-white p-0">
							<Section />
						</Col>
						<Col>
							<Experience />
						</Col>
					</Row>
				</Col>
				<Col xs={12} lg={3} className="ms-0 ms-md-3 ">
					<Row className="flex-column g-2 ">
						<Col className="border rounded-3 bg-white">Lingua del profilo</Col>
						<Col className="border rounded-3 bg-white px-3 ">
							<h6 className="mt-3 ms-2">Altri profili consultati</h6>
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</Col>
						<Col className="border rounded-3 bg-white px-3">
							<h6 className="mt-3 ms-2 mb-0">Persone che potresti conoscere</h6>
							<p className=" ms-2 fs-6">Dal tuo settore</p>
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<hr />
							<AsidePortrait />
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
