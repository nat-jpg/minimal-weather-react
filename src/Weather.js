import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const apiKey = "49b631c45785fe73d2a88477803dea22";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
        <h2>London</h2>
        <h3>Mostly Cloudy</h3>
        <h1>13°C</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/5483/5483174.png" alt="mostly cloudy"/>
        <div className="row">
            <div className="col-6">
                <ul>
                    <li>Wind</li>
                    <li>19 KM/H</li>
                </ul>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity</li>
                    <li>74%</li>
                </ul>
            </div>
        </div>
        </div>
    )
}