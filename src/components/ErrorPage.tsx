import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ErrorPage = () => (
	<Container className="bg-white">
		<Row className="flex-column">
			<Col>
				<Row className="errorPage BgPage">
					<Col>
						<Row className="justify-content-center text-center mt-5">
							<Col xs={12}>
								<img
									className="mt-3"
									src="/public/images/3p7p6a7q99wymlzghijta8d3p.svg"
									alt="Error page img"
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
					</Col>
				</Row>
			</Col>
			<Col className="fotterErrorPage">
				<Row className="text-center justify-content-center align-items-center text-secondary m-0 fw-bold">
					<Col className="px-0" xs={1}>
						Contratto di licenza
					</Col>
					<Col className="px-0 col2ShortFooter" xs={1}>
						Informativa sulla privacy
					</Col>
					<Col className="px-0 col2ShortFooter" xs={1}>
						Linee guida della community
					</Col>
					<Col className="px-0 col2ShortFooter" xs={1}>
						Informativa sui cookie
					</Col>
					<Col className="px-0 col2ShortFooter" xs={1}>
						Informativa sul copyright
					</Col>
					<Col className="px-0" xs={1}>
						Controlli ospite
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>
);
