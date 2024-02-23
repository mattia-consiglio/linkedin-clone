import React, { useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleJobDetails from "./SingleJobDetails";
import { Job } from "../redux/reducers/jobs";

interface SingleJobProps {
	job: Job;
	searchPage: boolean;
	className?: string;
	selectedJob?: Job;
	setSelectedJob?: React.Dispatch<React.SetStateAction<Job>>;
}

function SingleJob({
	job,
	searchPage,
	className,
	selectedJob,
	setSelectedJob,
}: SingleJobProps) {
	const [random, setRandom] = React.useState(0);
	const genRandom = useCallback(
		(): number => Math.floor(Math.random() * 20),
		[],
	);

	useEffect(() => {
		setRandom(genRandom());
	}, []);

	return (
		<>
			<Container className="">
				<Row
					className={
						"justify-content-center  hoverColor" +
						(searchPage && selectedJob && selectedJob._id === job._id
							? " active"
							: "")
					}
					onClick={() => {
						if (searchPage) {
							setSelectedJob!(job);
						}
					}}
				>
					<Col xs={12} md={1} className="mt-2">
						{" "}
						<img
							src="http://placekitten.com/200"
							alt="logo_azienda"
							width={50}
							height={50}
						/>
					</Col>
					<Col xs={12} md={10} className="mt-2">
						<h6 className="text-primary mb-0"> {job.title} </h6>
						<p className="mb-0"> {job.company_name + " " + job.category} </p>
						<p className="opacity-75 littleFont">
							{" "}
							{job.candidate_required_location}{" "}
						</p>
						<p className="littleFont opacity-75 mb-2">
							<span className="text-success fw-semibold">
								{" "}
								{random} candidati{" "}
							</span>{" "}
							<i className="bi bi-dot"></i>{" "}
							<span>
								<img
									width={13}
									height={13}
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
									alt=""
								/>
							</span>{" "}
							Candidatura semplice
						</p>
					</Col>
					<Col xs={1} className="mt-2 ">
						<i className="bi bi-x fs-2"></i>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SingleJob;
