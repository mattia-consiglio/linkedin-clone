import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faPlus,
	faPen,
	faBuilding,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
const Education = () => {
	return (
		<div className="formation">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<h3>Formazione</h3>
					<img
						src="https://static.licdn.com/aero-v1/sc/h/8zzzkhxduv0r11cuxbs48pg03"
						alt="Profile"
						width="50px"
					/>
				</div>
				<div>
					<FontAwesomeIcon icon={faPlus} style={{ marginRight: "30px" }} />
					<FontAwesomeIcon icon={faPen} style={{ marginRight: "30px" }} />
				</div>
			</div>
			<h4>IIS Enrico Mattei</h4>
			<p>
				Diploma di Specializzazione di 1° livello DS1 in Scienze dell'Economia e
				della Gestione Aziendale, Sistemi di gestione delle informazioni,
				generale
			</p>
			<p>2010 - 2017</p>
			<p>Votazione: 67</p>
		</div>
	);
};

export default Education;
