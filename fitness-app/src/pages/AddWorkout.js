// src/pages/AddWorkout.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function AddWorkout() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddWorkout = (e) => {
    e.preventDefault();
    // TODO: handle saving the new workout
    console.log('New Workout:', { name, description });
    
    // Reset form
    setName('');
    setDescription('');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Add New Workout</h2>
          <Form onSubmit={handleAddWorkout}>
            <Form.Group className="mb-3" controlId="workoutName">
              <Form.Label>Workout Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Bodypump, Yoga, etc."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="workoutDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Brief description of the workout..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Workout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddWorkout;
