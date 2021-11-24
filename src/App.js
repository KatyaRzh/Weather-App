import "./index.css";
import Cities from "./Cities";
import CurrentCity from "./CurrentCity";
import WeatherTemperature from "./Weathertemperature.js.js";
import Crypto from "./Crypto";
import Footer from "./Footer";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<Cities />
				<Weather defaultCity="New York" />
				<WeatherInfo />
				<CurrentCity />
				<WeatherTemperature />
				<Crypto />
				<Footer />
			</div>
		</div>
	);
}
