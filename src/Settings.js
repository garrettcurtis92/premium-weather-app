import React from 'react';
import './WeatherWidget.css';

function Settings({ unit, setUnit }) {
  const isImperial = unit === 'imperial';

  return (
    <div className="weather-widget">
      <h2>Settings</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="toggle-label">°C</span>
        <input
          className="tgl tgl-ios"
          id="unit-toggle"
          type="checkbox"
          checked={isImperial}
          onChange={() => setUnit(isImperial ? 'metric' : 'imperial')}
        />
        <label className="tgl-btn" htmlFor="unit-toggle"></label>
        <span className="toggle-label">°F</span>
      </div>
    </div>
  );
}

export default Settings;