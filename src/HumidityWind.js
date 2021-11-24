import React from "react";

export default function HumidityWind() {
	return (
		<div class="col-6 weather-details-div">
			<ul class="weather-details">
				<li>
					Humidity: <span id="humidity"></span>%
				</li>
				<li>
					Wind: <span id="wind"></span> km/h
				</li>
			</ul>
		</div>
	);
}
