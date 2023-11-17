import React from "react";

export default function WeatherForecastDay(props) {

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return (
        <div>
             <div className="WeatherForecast-day">{day()}</div>
                    <div className="WeatherForecast-icon">
                        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather icon"/>
                    </div>
                    <div className="WeatherForecast-temp">
                        <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
                        <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
                    </div>
        </div>
    )
}