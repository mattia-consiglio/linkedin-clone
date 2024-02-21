import React from "react";
import { Col, Container, Row } from "react-bootstrap";

/**
 *  Componente per creare la griglia a 2 o 3 colonne
 *	Passere come prop il numero di colonne da creare (2 o 3)
 *	e due componenti:
 *	- leftCol: componenti da mostrare a sinistra. Sempre obbigatorio
 *	- centerCol: componenti da mostrare al centro. Obbligatoia se colsNumber è 3
 *	- rightCol: componenti da mostrare a destra. Sempre obbigatorio
 *
 * 	Per insere le colonne con il bordo arrotondato sare il comepinente CardColWrapper e mettere il contenuto al suo interno
 */
type GridSystemProps =
	| {
			colsNumber: 2;
			leftCol: React.ReactNode;
			centerCol?: null;
			rightCol: React.ReactNode;
	  }
	| {
			colsNumber: 3;
			leftCol: React.ReactNode;
			centerCol: React.ReactNode;
			rightCol: React.ReactNode;
	  };

const GridSystem = ({
	colsNumber = 2,
	leftCol,
	centerCol = null,
	rightCol,
}: GridSystemProps) => {
	return (
		<Container>
			<Row className="py-3 gx-4">
				<Col
					style={{ maxWidth: "225px" }}
					xs={12}
					lg={colsNumber === 3 ? 3 : 9}
				>
					<Row className=" flex-column g-2">{leftCol}</Row>
				</Col>
				{colsNumber === 3 && (
					<Col>
						<Row className=" flex-column g-2">{centerCol}</Row>
					</Col>
				)}
				<Col xs={12} lg={3}>
					<Row className="flex-column g-2 ">{rightCol}</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default GridSystem;
