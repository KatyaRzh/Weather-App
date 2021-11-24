import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
	const [city, displayCity] = useState(" ");
	const [loaded, setLoaded] = useState(false);
	const [weather, setWeather] = useState({});

	function displayWeather(response) {
		setLoaded(true);
		setWeather({
			temperature: Math.round(response.data.main.temp),
			wind: Math.round(response.data.wind.speed),
			humidity: Math.round(response.data.main.humidity),
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	function handleSearch(event) {
		event.preventDefault();
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bca44421f5ddd1ef8a0ab2b038d5824c&units=metric`;
		axios.get(url).then(displayWeather);
	}

	function changeCity(event) {
		displayCity(event.target.value);
	}

	let Form = (
		<form onSubmit={handleSearch}>
			<input
				type="Search"
				placeholder="Enter a city.."
				onChange={changeCity}
				class="form-control"
			/>
			<input type="submit" value="Search" class="btn btn-primary w-100" />
		</form>
	);

	if (loaded) {
		return (
			<div>
				{" "}
				{Form}
				<ul class="weather-details">
					<li>Temperature: {weather.temperature} ºC </li>
					<li>Wind: {weather.wind} km/h </li>
					<li>Humidy: {weather.humidity} %</li>
					<li>Description: {weather.description} </li>
					<li>
						<img srcs={weather.icon} alt="icon" />
					</li>
				</ul>
			</div>
		);
	} else {
		return Form;
	}
}
