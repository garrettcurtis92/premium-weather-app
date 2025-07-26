import React from 'react';

function About() {
  return (
    <div className="weather-widget" style={{ textAlign: 'center' }}>
      <h2>About</h2>
      <img
        src="/profilepic.jpeg" // Place your photo in the public folder and update the filename
        alt="Garrett Curtis"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '3px solid #86d993'
        }}
      />
      <p>
        <a
          href="https://github.com/garrettcurtis92"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#2e8b57', textDecoration: 'none' }}
        >
          GitHub Profile
        </a>
      </p>
    </div>
  );
}

export default About;