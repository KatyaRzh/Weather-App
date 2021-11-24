import react from "react";

export default WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      if (loaded) {
		return (
      <div>
        <h1>{weatherData.city}<h1/>

        <ul class ="weather-details">
        <li><FormattedDate date={weatherData.date}/></li>
        <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
        <img src={props.Data.iconUrl}
        alt={props.data.description}
        className="float-left"/>
        <div className="float-left">
        <span className="temperature">
      {Math.round(weatherData.temperature)}
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


