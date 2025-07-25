import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

function Home({ unit = 'imperial' }) {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          console.error(err);
          setError('Location permission denied or unavailable.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

 useEffect(() => {
    if (coords.lat && coords.lon) {
      const API_KEY = 'a5f1488e6f82dc5a47a0c73f5e8f439d';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=${unit}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((err) => {
          setError('Failed to fetch weather data.');
        });
    }
  }, [coords, unit]);

return (
  <div className="widget-container">
    {error && <p>{error}</p>}

    {weatherData ? (
      <WeatherWidget
        location={weatherData.name}
        temperature={weatherData.main.temp}
        condition={weatherData.weather[0].main}
        unit={unit}
      />
    ) : (
      <p>Loading weather data...</p>
    )}
  </div>
);
}

export default Home;