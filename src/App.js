import "./index.css";
import Cities from "./Cities";
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import Crypto from "./Crypto";
import Footer from "./Footer";
import Weather from "./Weather";
import WeatherInfo from "./Weatherinfo";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<Cities />
				<Weather defaultCity="New York" />
				<WeatherInfo />
				<CurrentCity />
				<CurrentTemp />
				<Crypto />
				<Footer />
			</div>
		</div>
	);
}
