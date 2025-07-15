import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import LocationWeather from './LocationWeather';
import About from './About';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:cityName" element={<LocationWeather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
