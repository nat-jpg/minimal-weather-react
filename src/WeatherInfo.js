import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
            <h4>
                <FormattedDate date={props.data.date} />
            </h4>
            <h3 className="text-capitalize">{props.data.description}</h3>
            <WeatherTemperature celcius={props.data.temperature} />
            <img className="forecast-img" src={props.data.iconUrl} alt={props.data.description}/>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Wind</li>
                        <li>{props.data.wind} KM/H</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity</li>
                        <li>{props.data.humidity}%</li>
                    </ul>
                </div>
             </div>
        </div>
    );
}