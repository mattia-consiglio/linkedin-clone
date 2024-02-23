import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface GridSystemBasicProps {
	className?: string;
	colsSizes?: {
		left?: number;
		center?: number;
		right?: number;
	};
}

interface Col1Props extends GridSystemBasicProps {
	colsNumber: 1;
	centerCol: React.ReactNode;
	rightCol?: React.ReactNode;
	leftCol?: React.ReactNode;
}

interface Col2Props extends GridSystemBasicProps {
	colsNumber: 2;

	leftCol: React.ReactNode;
	rightCol: React.ReactNode;
	centerCol?: React.ReactNode;
}

interface Col3Props extends GridSystemBasicProps {
	colsNumber: 3;

	leftCol: React.ReactNode;
	centerCol: React.ReactNode;
	rightCol: React.ReactNode;
}

type GridSystemProps = Col1Props | Col2Props | Col3Props;

/**
 *  Componente per creare la griglia a 2 o 3 colonne
 *	Passere come prop il numero di colonne da creare (2 o 3)
 *	e due componenti:
 *	- leftCol: componenti da mostrare a sinistra. Obbligatoia se colsNumber è 2 o 3
 *	- centerCol: componenti da mostrare al centro. Obbligatoia se colsNumber è 1 o 3
 *	- rightCol: componenti da mostrare a destra. Obbligatoia se colsNumber è 2 o 3
 *	è possibile passare la dimensione individuale delle colonne con colsSizes
 *
 * 	Per insere le colonne con il bordo arrotondato sare il comepinente CardColWrapper e mettere il contenuto al suo interno
 */
const GridSystem = ({
	colsNumber,
	leftCol,
	centerCol,
	rightCol,
	colsSizes,
}: GridSystemProps) => {
	return (
		<Container>
			<Row className="py-3 gx-4">
				{(colsNumber === 2 || colsNumber === 3) && (
					<Col
						xs={12}
						lg={
							colsSizes && colsSizes.left
								? colsSizes.left
								: colsNumber === 3
								? 3
								: 9
						}
						className={colsNumber === 3 ? "grid-col-left" : ""}
					>
						<Row className={"flex-column g-2"}>{leftCol}</Row>
					</Col>
				)}
				{(colsNumber === 3 || colsNumber === 1) && (
					<Col
						lg={
							colsSizes && colsSizes.center
								? colsSizes.center
								: colsNumber === 3
								? 6
								: 12
						}
					>
						<Row className=" flex-column g-2">{centerCol}</Row>
					</Col>
				)}
				{(colsNumber === 2 || colsNumber === 3) && (
					<Col xs={12} lg={colsSizes && colsSizes.right ? colsSizes.right : 3}>
						<Row className="flex-column g-2 ">{rightCol}</Row>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default GridSystem;
