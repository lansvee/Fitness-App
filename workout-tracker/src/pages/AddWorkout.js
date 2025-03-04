// src/pages/AddWorkout.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AddWorkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new workout logic
  };

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Add Workout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Workout Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" placeholder="e.g. 20 mins" required />
        </Form.Group>
        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            Add Workout
          </Button>
          <Button variant="danger" as={Link} to="/workouts">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
