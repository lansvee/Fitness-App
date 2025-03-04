// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Workouts from './pages/Workouts';
import AddWorkout from './pages/AddWorkout';

function App() {
  // Track logged-in status for demonstration
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Placeholder logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic...
  };

  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* For simplicity, handle login state change here */}
        <Route path="/logout" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/add-workout" element={<AddWorkout />} />
      </Routes>
    </Router>
  );
}

export default App;
