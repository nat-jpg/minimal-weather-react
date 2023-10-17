import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
setWeatherData({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5483/5483174.png",
    date: new Date(response.data.dt * 1000),
})
setReady(true);
    }

    function search() {
        const apiKey = "49b631c45785fe73d2a88477803dea22";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }

    if (ready) {
        return (
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" onChange={handleCityChange} />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-light" /></div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                </div>
        );
    } else {
        search();
    return "Loading...";
    }
}