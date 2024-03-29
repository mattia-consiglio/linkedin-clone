import { Modal, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { putPostAction } from "../redux/actions/posts";

interface EditModalProps {
	show: boolean;
	setShowModal: (show: boolean) => void;
	postId: string;
}

const EditModal: React.FC<EditModalProps> = ({
	show,
	setShowModal,
	postId,
}) => {
	const dispatch = useAppDispatch();
	const [text, setText] = useState<string>("");

	const handleEditPost = () => {
		dispatch(putPostAction(postId, text));
		setShowModal(false);
	};

	return (
		<Modal
			show={show}
			onHide={() => {
				setShowModal(false);
			}}
		>
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
