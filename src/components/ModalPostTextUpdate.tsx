import { Modal, Button } from "react-bootstrap";
import { putCommentsAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useState } from "react";
import Form from "react-bootstrap/Form";

interface EditModalProps {
	show: boolean;
	handleClose: () => void;
	postId: string;
}

const EditModal: React.FC<EditModalProps> = ({ show, handleClose, postId }) => {
	const dispatch = useAppDispatch();
	const [text, setText] = useState<string>("");

	const handleEditPost = () => {
		dispatch(putCommentsAction(postId, text));
		handleClose();
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modifica Post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Label>TEXT</Form.Label>
					<Form.Control
						type="text"
						placeholder={"Enter text"}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button type="submit" variant="primary" onClick={handleEditPost}>
					Salva modifica
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditModal;
