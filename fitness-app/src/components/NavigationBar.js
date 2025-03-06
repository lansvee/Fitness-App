// src/components/NavigationBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Retrieve the token from localStorage (or wherever you store it)
  const token = localStorage.getItem("token");

  return (
    <header className="top-nav">
      {/* Logo */}
      <div className="nav-logo">THE ROW</div>

      {/* Navigation Links */}
      <nav className={isMenuOpen ? "nav-links nav-active" : "nav-links"}>
        <Link to="/">Home</Link>

        {/* Only show Workouts / Add Workout if user is logged in */}
        {token && (
          <>
            <Link to="/workouts">Workouts</Link>
            <Link to="/add-workout">Add Workout</Link>
          </>
        )}

        {/* If no token, show Login / Register */}
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Join Today</Link>
          </>
        )}

        {/* Optional Logout link if user is logged in */}
        {token && (
          <Link
            to="/"
            onClick={() => {
              // Clear token and refresh or navigate
              localStorage.removeItem("token");
              window.location.reload(); // or use a state-based solution
            }}
          >
            Logout
          </Link>
        )}
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
