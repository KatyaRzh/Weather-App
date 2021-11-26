import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./Weathertemperature.js";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="d-flex mt-3">
				<div className="">
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
				<div className="text-start">
					<h1>{props.data.city}</h1>
					<ul className="p-0 date">
						<li className="text-capitalize">
							{props.data.description}
						</li>
						<li className="">
							<FormattedDate date={props.data.date} />
						</li>
					</ul>
					<ul className="p-0 humidity-wind">
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
