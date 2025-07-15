import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Optional if you want to style it separately

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      {/* Example for Location page — you’ll use a search input later */}
      {/* <NavLink to="/location/Seattle" className="nav-link">Seattle</NavLink> */}
    </nav>
  );
}

export default NavBar;
