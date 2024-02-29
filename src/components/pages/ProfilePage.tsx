import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import { Profileinfo } from "../Profileinfo";
import Experience from "../Experience";
import AsidePortrait from "../AsidePortrait";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllUserAction, setUserImageAction } from "../../redux/actions";
import Analyses from "../Analyses";
import Resources from "../Resources";

import GridSystem from "../GridSystem";
import { CardColWrapper } from "../CardColWrapper";
import Footer from "../Footer";
import CardWithPage from "../CardWithPage";
import { buildingsIcon } from "../../icons";

const Profile = () => {
	const [show, setShow] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [image, setImage] = useState<File | null>(null);
	const dispatch = useAppDispatch();
	const profileExp = useAppSelector((state) => state.profile.exp);
	const profileInfo = useAppSelector((state) => state.profile.projectUsers);

	useEffect(() => {
		if (getAllUserAction.length > 0) {
			return;
		}
		dispatch(getAllUserAction());
	}, []);

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

						<CardWithPage
							title="Esperienza"
							page="/experiences"
							data={profileExp}
							icon={buildingsIcon}
						/>
					</>
				}
				rightCol={
					<>
						<CardColWrapper>
							<h6 className="mt-3 ms-2">Altri profili consultati</h6>
							{profileInfo.map((AsideUsersProps) => {
								return (
									<div key={AsideUsersProps._id}>
										<AsidePortrait
											label="Collegati"
											name={AsideUsersProps.name}
											surname={AsideUsersProps.surname}
											img={AsideUsersProps.image}
											description={AsideUsersProps.bio}
										/>
										<hr />
									</div>
								);
							})}
							{/* <AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Segui" />
							<hr />
							<AsidePortrait label="Segui" /> */}
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</CardColWrapper>
						<CardColWrapper>
							<h6 className="mt-3 ms-2 mb-0">Persone che potresti conoscere</h6>
							<p className=" ms-2 fs-6">Dal tuo settore</p>
							{profileInfo.map((AsideUsersProps) => {
								return (
									<div key={AsideUsersProps._id}>
										<AsidePortrait
											label="Collegati"
											name={AsideUsersProps.name}
											surname={AsideUsersProps.surname}
											img={AsideUsersProps.image}
											description={AsideUsersProps.bio}
										/>
										<hr />
									</div>
								);
							})}
							{/* <AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" />
							<hr />
							<AsidePortrait label="Collegati" /> */}
							<Button className="fw-semibold border-top border border-0 customButton w-100 ">
								Mostra tutto
							</Button>
						</CardColWrapper>
					</>
				}
			/>
			<Footer />
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
								dispatch(setUserImageAction(image));
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
