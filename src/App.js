import "./index.css";
import Cities from "./Cities";
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import Crypto from "./Crypto";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<Cities />
			<Weather />
			<CurrentCity />
			<CurrentTemp />
			<Crypto />
			<Footer />
		</div>
	);
}
