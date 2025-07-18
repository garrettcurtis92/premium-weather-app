import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

function Home() {
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
      // Replace with your OpenWeatherMap API key
      const API_KEY = 'a5f1488e6f82dc5a47a0c73f5e8f439d';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=imperial`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // ✅ See it in your console first!
          setWeatherData(data);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch weather data.');
        });
    }
  }, [coords]);

  return (
    <div>
    
      {error && <p>{error}</p>}
      {weatherData ? (
        <WeatherWidget
          temperature={weatherData.main.temp}
          location={weatherData.name}
          condition={weatherData.weather[0].main}
        />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Home;