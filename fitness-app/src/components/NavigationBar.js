// src/components/NavigationBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-nav">
      {/* Logo */}
      <div className="nav-logo">ZONIXX</div>

      {/* Navigation Links - we use <Link> instead of <a> */}
      <nav className={isMenuOpen ? "nav-links nav-active" : "nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/add-workout">Add Workout</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Join Today</Link>
      </nav>

      {/* Hamburger icon (shown on smaller screens) */}
      <div
        className="nav-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default NavigationBar;
