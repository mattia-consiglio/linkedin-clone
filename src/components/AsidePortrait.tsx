import { icon } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const AsidePortrait = ({
	label,
	icon,
}: {
	label: string;
	icon: JSX.Element;
}) => {
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
							{icon}
							{label}
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default AsidePortrait;
