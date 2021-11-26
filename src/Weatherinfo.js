import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./Weathertemperature.js.js";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<ul className="date">
				<li className="text-capitalize">{props.data.description}</li>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
			</ul>
			<div className="col-12">
				<ul className="humidity-wind">
					<li>Humidity: {props.data.humidity}%</li>
					<li>Wind: {props.data.wind} km/h</li>
				</ul>
			</div>
			<div className="row mt-3">
				<div className="col-12">
					<div className="clearfix">
						<div className="float-left">
							<WeatherIcon code={props.data.icon} size={52} />
						</div>

						<div className="float-left">
							<WeatherTemperature
								celsius={props.data.temperature}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
