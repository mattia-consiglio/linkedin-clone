import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import { Profileinfo } from "./Profileinfo";
import Experience from "./Experience";
import AsidePortrait from "./AsidePortrait";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setUserImageAction } from "../redux/actions";
import Analyses from "./Analyses";
import Resources from "./Resources";

import GridSystem from "./GridSystem";
import { CardColWrapper } from "./CardColWrapper";

const Profile = () => {
	const [show, setShow] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [image, setImage] = useState<File | null>(null);
	const dispatch = useAppDispatch();
	const userId = useAppSelector((state) => state.profile.me._id);

	useEffect(() => {
		console.log("inputValue", inputValue);
		console.log("show", show);
		if (inputValue !== "" && !show) {
			setInputValue("");
		}
	}, [show, inputValue]);

	return (
		<>
			<GridSystem
				colsNumber={2}
				leftCol={
					<>
						<CardColWrapper>
							<Profileinfo setShow={setShow} />
						</CardColWrapper>
						<CardColWrapper>
							<Analyses />
						</CardColWrapper>
						<CardColWrapper>
							<Resources />
						</CardColWrapper>
						<CardColWrapper>
							<Experience />
						</CardColWrapper>
					</>
				}
				rightCol={
					<>
						<CardColWrapper>
							<h6 className="mt-3 ms-2">Altri profili consultati</h6>
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Segui" />
							<hr />
							<AsidePortrait label="Segui" />
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</CardColWrapper>
						<CardColWrapper>
							<h6 className="mt-3 ms-2 mb-0">Persone che potresti conoscere</h6>
							<p className=" ms-2 fs-6">Dal tuo settore</p>
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</CardColWrapper>
					</>
				}
			/>
			{/* <Container>
				<Row className="flex-column flex-md-row justify-content-center align-items-top py-3 g-2 mx-2">
					<Col xs={12} lg={8} className="me-0 me-md-3">
						<Row className=" flex-column g-2">
							<Col className="border rounded-3 bg-white p-0">
								<Resources />
							</Col>
							<Col className="border rounded-3 bg-white p-0"></Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} lg={3} className="ms-0 ms-md-3 ">
						<Row className="flex-column g-2 ">
							<Col className="border rounded-3 bg-white">
								Lingua del profilo
							</Col>
							<Col className="border rounded-3 bg-white px-3 ">
								<h6 className="mt-3 ms-2">Altri profili consultati</h6>
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Segui" />
								<hr />
								<AsidePortrait label="Segui" />
								<Button className="fw-semibold border-top border border-0 customButton w-100 ">
									Mostra tutto
								</Button>
							</Col>
							<Col className="border rounded-3 bg-white px-3">
								<h6 className="mt-3 ms-2 mb-0">
									Persone che potresti conoscere
								</h6>
								<p className=" ms-2 fs-6">Dal tuo settore</p>
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<hr />
								<AsidePortrait label="Collegati" />
								<Button className="fw-semibold border-top border border-0 customButton w-100 ">
									Mostra tutto
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container> */}
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						type="file"
						placeholder="Seziona immagine"
						accept=".jpg, .jpeg,.png"
						value={inputValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							console.log(e.target.files);
							const files = e.target.files;
							setInputValue(e.target.value);
							if (files && files[0].size < 102400) {
								setImage(files[0]);
							} else {
								alert(
									"Immagine troppo grande. L'immagine deve essere inferire a 102,4 KB",
								);
								setInputValue("");
							}
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setShow(false);
						}}
					>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							if (image) {
								dispatch(setUserImageAction(userId, image));
							}
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Profile;
