import GridSystem from "./GridSystem";
import MiniFooter from "./MiniFooter";
import News from "./News";
import SideProfile from "./SideProfile";

const HomePage = () => {
	return (
		<>
			{" "}
			<GridSystem
				colsNumber={3}
				leftCol={<SideProfile />}
				centerCol={<></>}
				rightCol={
					<>
						{" "}
						<News />
						<MiniFooter />{" "}
					</>
				}
			/>
		</>
	);
};
export default HomePage;
