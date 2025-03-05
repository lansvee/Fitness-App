// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workouts from './pages/Workouts';
import AddWorkout from './pages/AddWorkout';

// Components
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      {/* NavigationBar is always visible at the top */}
      <NavigationBar />

      {/* Define our routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/add-workout" element={<AddWorkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
