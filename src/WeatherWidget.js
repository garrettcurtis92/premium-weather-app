import React from 'react';
import './WeatherWidget.css'; // Optional if you already made custom styles

function WeatherWidget({ temperature, location, condition, unit = 'imperial' }) {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  return (
    <div className="weather-widget">
      <h2>{location}</h2>
      <p>Temperature: {temperature}{unitSymbol}</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default WeatherWidget;
