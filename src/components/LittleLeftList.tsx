import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const LittleLeftList = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={3} className="my-2">
						<Card>
							<Card.Body className="pb-1 text-primary fw-semibold ">
								Gruppi
							</Card.Body>
							<Card.Body className="pb-1 text-primary fw-semibold d-flex justify-content-between">
								Eventi{" "}
								<span>
									{" "}
									<i className="bi bi-plus-lg  "></i>{" "}
								</span>
							</Card.Body>
							<Card.Body className="pb-2 text-primary fw-semibold ">
								Hashtag seguiti
							</Card.Body>
							<Button className=" text-center py-3 fw-semibold border-top border border-0 customButton w-100">
								Scopri di più
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default LittleLeftList;
