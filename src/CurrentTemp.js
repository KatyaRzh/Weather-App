import React from "react";

export default function CurrentTemp() {
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<div className="clearfix weather-temperature">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt="sunny"
							width="100px;"
							id="icon"
							className="float-left"
						/>

						<strong id="change-temp">71</strong>
						<span className="units">
							<a href="www.weather.com" id="celsius-link">
								°C
							</a>{" "}
							|
							<a
								href="www.weather.com"
								id="fahrenheit-link"
								className="active"
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
