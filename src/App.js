import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Settings from './Settings';

function App() {
  const [unit, setUnit] = useState('imperial'); // default to Fahrenheit

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home unit={unit} />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings unit={unit} setUnit={setUnit} />} />
      </Routes>
    </>
  );
}

export default App;