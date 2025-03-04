// src/pages/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS

export default function Home() {
  return (
    // Use Container's "fluid" variant if you want the background to span the full viewport width
    <Container fluid className="hero">
      <h1 className="display-4">Welcome to Fitrack</h1>
      <p className="lead">Your modern Workout Tracker!</p>

      <Button
        variant="primary"
        as={Link}
        to="/login"
        className="me-2"
      >
        Log In
      </Button>
      <Button
        variant="outline-light"
        as={Link}
        to="/register"
      >
        Register
      </Button>
    </Container>
  );
}
