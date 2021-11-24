import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: Math.round(response.data.main.temp),
			wind: Math.round(response.data.wind.speed),
			humidity: Math.round(response.data.main.humidity),
			description: response.data.weather[0].description,
			iconUrl:
				"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			city: response.data.name,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city.."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		const apiKey = "b111d9ecb27df9d5eac99c7ddb03f247";
		let apiUrl =
			"https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric";
		axios.get(apiUrl).then(handleResponse);
	}
	return "loading...";
}
