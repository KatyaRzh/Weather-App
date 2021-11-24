import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
	return props.loaded ? (
		<div className="WeatherInfo">
			<div>
				<h1>{props.weatherData.city}</h1>

				<ul className="weather-details">
					<li>
						<FormattedDate date={props.weatherData.date} />
					</li>
					<li className="text-capitalize">
						{props.weatherData.description}
					</li>
				</ul>
				<div className="row mt-3">
					<div className="col-6">
						<div className="clearfix">
							<img
								src={props.Data.iconUrl}
								alt={props.data.description}
								className="float-left"
							/>
							<div className="float-left">
								<span className="temperature">
									{Math.round(props.weatherData.temperature)}
								</span>
								<span className="unit">C</span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity: 40%</li>
							<li>Wind: 0.45 km/h</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	) : null;
}
