import "./styles.css";
import Cities from "./Cities";
import Form from "./Form";
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import HumidityWind from "./HumidityWind";
import Crypto from "./Crypto";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<Cities />
			<Form />
			<CurrentCity />
			<CurrentTemp />
			<HumidityWind />
			<Crypto />
			<Footer />
		</div>
	);
}
