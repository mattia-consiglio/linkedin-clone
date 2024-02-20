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
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Segui"
								icon={
									<svg
										width={20}
										className="me-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										id="add-small"
										aria-hidden="true"
										role="none"
										data-supported-dps="16x16"
										fill="currentColor"
										width="16"
										height="16"
									>
										<path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
									</svg>
								}
							/>
							<hr />
							<AsidePortrait
								label="Segui"
								icon={
									<svg
										width={20}
										className="me-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										id="add-small"
										aria-hidden="true"
										role="none"
										data-supported-dps="16x16"
										fill="currentColor"
										width="16"
										height="16"
									>
										<path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
									</svg>
								}
							/>
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</Col>
						<Col className="border rounded-3 bg-white px-3">
							<h6 className="mt-3 ms-2 mb-0">Persone che potresti conoscere</h6>
							<p className=" ms-2 fs-6">Dal tuo settore</p>
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
							<hr />
							<AsidePortrait
								label="Collegati"
								icon={
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
								}
							/>
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
