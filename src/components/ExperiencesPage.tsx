// ExperiencesPage.tsx
import React from "react";
import "./ExperiencesPage.css";

const ExperiencesPage = () => {
	return (
		<div className="experiences-page">
			<ExperienceCard />
		</div>
	);
};

const ExperienceCard = () => {
	return (
		<div className="experience-card">
			<div className="header">
				<svg
					role="none"
					aria-hidden="true"
					className="artdeco-button__icon rtl-flip"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					data-supported-dps="24x24"
					data-test-icon="arrow-left-medium"
				>
					<use href="#arrow-left-medium" width="24" height="24"></use>
				</svg>
				<h4>Titolo dell'esperienza</h4>
				<svg
					role="img"
					aria-hidden="false"
					aria-label="Modifica la posizione lavorativa Customer Service Representative"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					data-supported-dps="24x24"
					data-test-icon="edit-medium"
				>
					<use href="#edit-medium" width="24" height="24"></use>
				</svg>
			</div>
			<div className="content">
				<div className="left-content">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
					</svg>
					<img src="immagine.jpg" alt="Immagine" />
					<h5>Sottotitolo</h5>
				</div>
				<div className="right-content">
					<p>Testo 1</p>
					<p>Testo 2</p>
					<p>Testo 3</p>
					<p>Testo 4</p>
				</div>
			</div>
		</div>
	);
};

export default ExperiencesPage;
