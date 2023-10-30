import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celcius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }
    if (unit === 'celcius') {
    return (
        <div>
            <h1>{Math.round(props.celcius)}°C / <a href="/" onClick={convertToFahrenheit}>°F</a></h1>
        </div>
    );
    } else {
        let fahrenheit = (props.celcius * 9) / 5 + 32;
        return (
            <div>
                <h1>{Math.round(fahrenheit)}<a href="/" onClick={convertToCelcius}>°C</a> | °F</h1>
            </div>
        );
    }
}