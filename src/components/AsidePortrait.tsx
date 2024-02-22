import { icon } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const userIcon = (
	<svg
		className="me-1"
		width={20}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		id="connect-small"
		aria-hidden="true"
		role="none"
		data-supported-dps="16x16"
		fill="currentColor"
	>
		<path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
	</svg>
);

const plusIcon = (
	<svg
		className="me-1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		id="add-small"
		aria-hidden="true"
		role="none"
		data-supported-dps="16x16"
		fill="currentColor"
		height="16"
	>
		<path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
	</svg>
);

const AsidePortrait = ({ label }: { label: "Collegati" | "Segui" }) => {
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
							{label === "Collegati" ? userIcon : plusIcon}
							{label}
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default AsidePortrait;
