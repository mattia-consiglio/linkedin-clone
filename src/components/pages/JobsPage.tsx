import React, { useEffect } from "react";
import GridSystem from "../GridSystem";
import { Col } from "react-bootstrap";
import JobsCardCenter from "../JobsCardCenter";
import JobsCardLeft from "../JobsCardLeft";
import JobsCardRight from "../JobsCardRight";
import { getJobsAction } from "../../redux/reducers/jobs";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const JobsPage = () => {
	const dispatch = useAppDispatch();
	const joblist = ["developer", "webmaster", "designer"];
	const fixedJobs = useAppSelector((state) => state.jobs.fixedSearches);

	useEffect(() => {
		joblist.forEach((job, i) =>
			dispatch(getJobsAction({ search: job, limit: 3, index: i })),
		);
	}, []);
	return (
		<GridSystem
			colsNumber={3}
			leftCol={<JobsCardLeft />}
			centerCol={
				<>
					<JobsCardCenter
						title={"Le principali offerte di lavoro per te"}
						subtitle="Sulla base del tuo profilo e della tua cronologia delle ricerche"
						jobs={fixedJobs[0]}
					/>
					<JobsCardCenter
						title={"Assunzioni nella tua rete"}
						subtitle="Esplora le offerte di lavoro rilevanti nella tua rete"
						jobs={fixedJobs[1]}
					/>
					<JobsCardCenter
						title={"Altre offerte di lavoro per te"}
						subtitle="Sulla base del tuo profilo e della tua cronologia delle ricerche"
						jobs={fixedJobs[2]}
					/>
				</>
			}
			rightCol={<JobsCardRight />}
		/>
	);
};

export default JobsPage;
