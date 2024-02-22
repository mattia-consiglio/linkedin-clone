import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ErrorPage = () => (
	<Container className="">
		<Row className="justify-content-center align-items-center text-center flex-grow-1">
			<Col xs={12}>
				<img
					className="mt-3"
					src="https://placekitten.com/300/300"
					alt="gattino"
				/>
			</Col>
			<Col className="fw-bold fs-4 mt-2" xs={12}>
				Questa pagina non esiste
			</Col>
			<Col className="text-secondary my-2" xs={8} md={4}>
				Controlla l’URL o torna alla home page di LinkedIn.
			</Col>
			<Col xs={12}>
				<Link to="/profile">
					<Button
						className="mt-4 verificaOra fw-bold rounded-5 py-1 mb-3"
						variant=""
						// non so per quale motivo ma per avere lo stile della mia classe devo lasciare variant vuoto in questo tag
					>
						Vai al tuo feed
					</Button>
				</Link>
			</Col>
		</Row>
		{/* <Row className=" bg-white">Footer</Row> */}
	</Container>
);
