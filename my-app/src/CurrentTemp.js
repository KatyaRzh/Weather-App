import React from "react";

export default function CurrentTemp() {
	return (
		<div>
			<div class="row">
				<div class="col-6">
					<div class="clearfix weather-temperature">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt="sunny"
							width="100px;"
							id="icon"
							class="float-left"
						/>

						<strong id="change-temp">71</strong>
						<span class="units">
							<a href="www.weather.com" id="celsius-link">
								°C
							</a>{" "}
							|
							<a
								href="www.weather.com"
								id="fahrenheit-link"
								class="active"
							>
								°F
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
