import { Container, Row, Col } from "react-bootstrap";
import Section from "./Section";
import { Profileinfo } from "./Profileinfo";

const Profile = () => {
	return (
		<Container>
			<Row className="flex-column flex-md-row justify-content-center align-items-top py-3 g-2 mx-2">
				<Col xs={12} md={8} className="me-0 me-md-3">
					<Row className=" flex-column g-2">
						<Col className="border rounded-3 bg-white p-0">
							<Profileinfo />
						</Col>
						<Col className="border rounded-3 bg-white p-0">
							<Section />
						</Col>
					</Row>
				</Col>
				<Col xs={12} md={3} className="ms-0 ms-md-3">
					<Row className="flex-column g-2">
						<Col className="border rounded-3 bg-white">Lingua del profilo</Col>
						<Col className="border rounded-3 bg-white">
							Altri profili <br />
							consultati Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Amet quis ducimus cum assumenda earum dolorem. Accusantium
							similique iste, esse dolores repudiandae provident, quo illo sed
							maxime reiciendis fugit quidem sunt.
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
