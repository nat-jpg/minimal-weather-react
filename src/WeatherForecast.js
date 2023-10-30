import React from "react";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }

let apiKey="49b631c45785fe73d2a88477803dea22";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Mon</div>
                <div className="WeatherForecast-icon">
                    <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="weather icon"/>
                </div>
                <div className="WeatherForecast-temp">
                    <span className="temp-max">20°</span>
                    <span className="temp-min">15°</span>
                </div>
            </div>
        </div>
    </div>
}