import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";
import "../assets/style/style.scss";

const ExperiencesPage = () => {
	return (
		<div className="experiences-page">
			<div className="small-experience">
				<Experience />
			</div>
		</div>
	);
};

export default ExperiencesPage;
