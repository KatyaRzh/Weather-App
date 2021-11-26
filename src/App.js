import "./index.css";
import Cities from "./Cities";
import WeatherTemperature from "./Weathertemperature.js.js";
import Crypto from "./Crypto";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<Cities />
				<Weather defaultCity="New York" />
				<WeatherTemperature />

				<Crypto />
				<Footer />
			</div>
		</div>
	);
}
