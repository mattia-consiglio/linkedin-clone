import React from "react";
import { Col, Container } from "react-bootstrap";
import { CardColWrapper } from "./CardColWrapper";
import SingleJob from "./SingleJob";
import { Job } from "../redux/reducers/jobs";
interface JobsCardCenterProps {
	title: string;
	subtitle: string;
	jobs: Job[];
}

const JobsCardCenter = ({ title, subtitle, jobs }: JobsCardCenterProps) => {
	return (
		<CardColWrapper className="pb-3">
			<Container className="pt-3">
				<h5> {title} </h5>
				<p> {subtitle} </p>
			</Container>

			{jobs &&
				jobs.map((job) => (
					<SingleJob key={job._id} job={job} searchPage={true} />
				))}
		</CardColWrapper>
	);
};

export default JobsCardCenter;
