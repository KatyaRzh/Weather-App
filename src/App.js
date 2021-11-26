import "./index.css";
import Cities from "./Cities";
import Crypto from "./Crypto";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<Cities />
				<Weather defaultCity="New York" />
				<Crypto />
				<Footer />
			</div>
		</div>
	);
}
