import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
if(loaded) {
    console.log(forecast);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">{forecast[0].dt}</div>
                    <div className="WeatherForecast-icon">
                        <img src={forecast[0].weather[0].icon} alt="weather icon"/>
                    </div>
                    <div className="WeatherForecast-temp">
                        <span className="temp-max">{Math.round(forecast[0].temp.max)}°</span>
                        <span className="temp-min">{Math.round(forecast[0].temp.min)}°</span>
                    </div>
                </div>
            </div>
        </div>
        );
}
else {
    let apiKey="49b631c45785fe73d2a88477803dea22";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;  
}
}