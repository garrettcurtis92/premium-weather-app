import React from 'react';
import './WeatherWidget.css'; // Optional if you already made custom styles

function WeatherWidget({ temperature, location, condition }) {
  return (
    <div className="weather-widget">
      <h2>{location}</h2>
      <p>Temperature: {temperature}°F</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default WeatherWidget;
