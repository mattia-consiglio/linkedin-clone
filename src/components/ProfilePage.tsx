import { Container, Row, Col } from "react-bootstrap";
import Section from "./Section";

const Profile = () => {
	return (
		<Container>
			<Row className="flex-column flex-md-row justify-content-center align-items-top py-3 g-2 mx-2">
				<Col xs={12} md={7} className="me-0 me-md-3">
					<Row className=" flex-column g-2">
						<Col className="border rounded-3 bg-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
							voluptatum laborum minus autem sit placeat aut iusto iure officia
							dignissimos quasi possimus tempora velit debitis expedita suscipit
							animi quam aperiam? Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Voluptatum, libero officiis. Corrupti,
							perferendis explicabo quidem cupiditate doloremque unde eos
							expedita, veniam iusto eligendi eum! Eos sunt nobis alias ratione
							ut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
							repudiandae incidunt obcaecati iusto illum, distinctio laudantium
							sint maxime, tenetur quod dolores? Officiis nemo ducimus aliquam
							iste dolorem laudantium fugiat tenetur? Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Excepturi non magni quae
							nostrum nihil itaque rem, ab fugit sit dolor explicabo repellat
							recusandae, doloribus fuga ex asperiores ullam quam delectus?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam
							expedita molestiae nostrum soluta asperiores saepe eaque vitae. Et
							ducimus natus cupiditate non ipsam veritatis suscipit, sapiente
							fugiat blanditiis quam. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Porro suscipit ad repudiandae ipsam ut nisi
							provident, aperiam doloribus, expedita fugit sint reiciendis vitae
							ducimus adipisci alias ex illum! Alias, dolores? Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Aliquam mollitia quae
							dolore recusandae quod deleniti vero. Vel ad consequuntur repellat
							eum est, quia distinctio hic nulla iusto voluptatum ipsam
							voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Voluptatum sit nobis repellat natus velit ab id incidunt,
							reiciendis soluta quibusdam voluptatem enim dolores, pariatur
							adipisci harum maxime. Earum, similique cupiditate!
						</Col>
						<Col className="border rounded-3 bg-white">
							<Section />
						</Col>
					</Row>
				</Col>
				<Col xs={12} md={2} className="ms-0 ms-md-3">
					<Row className="flex-column g-2">
						<Col className="border rounded-3 bg-white">Lingua del profilo</Col>
						<Col className="border rounded-3 bg-white">
							Altri profili <br />
							consultati Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Amet quis ducimus cum assumenda earum dolorem. Accusantium
							similique iste, esse dolores repudiandae provident, quo illo sed
							maxime reiciendis fugit quidem sunt.
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
