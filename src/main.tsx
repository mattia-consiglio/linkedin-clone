import ReactDOM from "react-dom/client";
import App from "./components/pages/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
