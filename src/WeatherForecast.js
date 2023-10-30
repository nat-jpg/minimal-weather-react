import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast() {
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