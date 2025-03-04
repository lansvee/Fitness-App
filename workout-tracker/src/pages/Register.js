// src/pages/Register.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" required />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}
