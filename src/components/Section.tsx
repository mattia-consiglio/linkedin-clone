import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
const Section = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>Analisi</Card.Title>
								<Card.Text>
									<h1> prova colore</h1>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Section;
