import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Forecast from './Forecast';
import About from './About';
import Settings from './Settings';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
