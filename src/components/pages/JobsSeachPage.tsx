import React, { useEffect, useState } from "react";
import NavJob from "../NavJob";
import GridSystem from "../GridSystem";
import SingleJobDetails from "../SingleJobDetails";
import { Col, Container, Row } from "react-bootstrap";
import SingleJob from "../SingleJob";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Job, getJobsAction } from "../../redux/reducers/jobs";
import "../../assets/style/jobs.scss";

const JobsSeachPage = () => {
	const jobs = useAppSelector((state) => state.jobs.search);

	const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);

	useEffect(() => {
		const tempSelectedJob = jobs.find((job) => job.selected);
		if (selectedJob === undefined && tempSelectedJob === undefined) {
			setSelectedJob(jobs[0]);
		} else {
			setSelectedJob(tempSelectedJob!);
		}
	}, [jobs]);

	return (
		<>
			<NavJob />
			<Container>
				<Row>
					<Col className="scroll-results">
						{jobs.map((job) => (
							<SingleJob
								key={job._id}
								job={job}
								selectedJob={selectedJob}
								setSelectedJob={setSelectedJob}
								searchPage={true}
							/>
						))}
					</Col>
					<Col className="scroll-results">
						<GridSystem
							colsNumber={1}
							centerCol={
								<>{selectedJob && <SingleJobDetails job={selectedJob} />}</>
							}
							className="vh-100 "
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default JobsSeachPage;
