import { Button, Form, Image } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";

const inviaIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		id="send-privately-medium"
		aria-hidden="true"
		role="none"
		data-supported-dps="24x24"
		fill="currentColor"
		width="24"
		height="24"
	>
		<path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
	</svg>
);
const Comments = ({ comments }: { comments: any[] }) => {
	return (
		<>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label className="mt-3">Commenta</Form.Label>
				<div className="d-flex align-items-center">
					<Image
						src="https://www.placedog.net/30"
						roundedCircle
						className="mx-3"
						width={50}
						height={50}
					/>
					<Form.Control
						className="rounded-left rounded-right"
						type="text"
						placeholder="Normal text"
					/>
				</div>
			</Form.Group>
			<Button
				variant="primary"
				size="sm"
				className="mt-2 mx-5 d-flex align-items-center rounded-pill"
			>
				{inviaIcon} Pubblica
			</Button>
		</>
	);
};

export default Comments;
