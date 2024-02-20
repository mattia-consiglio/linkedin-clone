import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const AsidePortrait = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={2} className="my-2">
						<img
							src="http://placekitten.com/200"
							width={50}
							alt=""
							className="rounded-circle"
						/>
					</Col>
					<Col xs={12} md={10} className="mt-2 ">
						<h6 className="mb-0 ms-2">PlaceFirstLastName</h6>
						<p className="mb-0 ms-2">placeJob</p>
						<Button className="rounded-pill btn btn-light btn btn-outline-secondary border-2 mb-3 py-1 mt-3 customButton">
							<svg
								role="none"
								aria-hidden="true"
								className="artdeco-button__icon text-secondary"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								data-supported-dps="16x16"
								data-test-icon="connect-small"
							>
								<use href="#connect-small" width="16" height="16"></use>
							</svg>{" "}
							Collegati
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default AsidePortrait;
