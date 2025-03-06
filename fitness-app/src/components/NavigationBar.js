// src/components/NavigationBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import "./NavigationBar.css";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // Initialize Notyf
  const notyf = new Notyf();

  const handleLogout = () => {
    // Remove token
    localStorage.removeItem("token");

    // Show Notyf notification
    notyf.success("You have logged out successfully!");

    // Small delay so user sees the notification
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // Closes the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="top-nav">
      {/* Logo */}
      <div className="nav-logo">THE ROW</div>

      {/* Navigation Links */}
      <nav className={isMenuOpen ? "nav-links nav-active" : "nav-links"}>
        {/* Always visible link */}
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>

        {/* If token exists => show Workouts / Add Workout / Logout */}
        {token && (
          <>
            <Link to="/workouts" onClick={handleLinkClick}>
              Workouts
            </Link>
            <Link to="/add-workout" onClick={handleLinkClick}>
              Add Workout
            </Link>
            <Link
              to="/"
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
            >
              Logout
            </Link>
          </>
        )}

        {/* If no token => show Login / Register */}
        {!token && (
          <>
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
            <Link to="/register" onClick={handleLinkClick}>
              Join Today
            </Link>
          </>
        )}
      </nav>

      {/* Hamburger icon (shown on smaller screens) */}
      <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default NavigationBar;
