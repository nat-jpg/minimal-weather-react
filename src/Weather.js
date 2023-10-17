import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
setWeatherData({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5483/5483174.png",
    date: "Tuesday 11:45",
})
setReady(true);
    }

    if (ready) {
        return (
            <div className="weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-light" /></div>
                    </div>
                </form>
            <h2>{weatherData.city}</h2>
            <h4>{weatherData.date}</h4>
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <h1>{Math.round(weatherData.temperature)}°C</h1>
            <img src={weatherData.iconUrl} alt={weatherData.description}/>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Wind</li>
                        <li>{weatherData.wind} KM/H</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity</li>
                        <li>{weatherData.humidity}%</li>
                    </ul>
                </div>
            </div>
            </div>
        );
    } else {
        const apiKey = "49b631c45785fe73d2a88477803dea22";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}