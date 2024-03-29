import React from "react";

import GridSystem from "../GridSystem";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { buildingsIcon } from "../../icons";
import CardWithPage from "../CardWithPage";
import MiniFooter from "../MiniFooter";

const ExperiencesPage = () => {
	const profileExp = useAppSelector((state) => state.profile.exp);
	return (
		<GridSystem
			colsNumber={2}
			leftCol={
				<>
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
					<MiniFooter />
				</>
			}
		/>
	);
};

export default ExperiencesPage;
