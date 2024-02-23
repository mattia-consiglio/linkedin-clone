import GridSystem from "../GridSystem";
import MiniFooter from "../MiniFooter";
import News from "../News";
import Posts from "../Posts";
import SideProfile from "../SideProfile";
import SingleJob from "../SingleJob";

const HomePage = () => {
	return (
		<>
			<GridSystem
				colsNumber={3}
				leftCol={<SideProfile />}
				centerCol={
					<>
						<Posts />
					</>
				}
				rightCol={
					<>
						<News />
						<MiniFooter />
					</>
				}
			/>
		</>
	);
};
export default HomePage;
