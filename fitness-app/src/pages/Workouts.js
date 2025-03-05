// src/pages/Workouts.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Dummy data
const dummyWorkouts = [
  {
    id: 1,
    name: 'Bodystep',
    description: 'An energizing step workout to tone the lower body.'
  },
  {
    id: 2,
    name: 'Bodypump',
    description: 'High-intensity barbell workout to push limits and build strength.'
  },
  {
    id: 3,
    name: 'Active Yoga',
    description: 'Focusing on coordination of breath and movement.'
  },
];

function Workouts() {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Workouts</h2>
      <Row>
        {dummyWorkouts.map((workout) => (
          <Col md={4} className="mb-4" key={workout.id}>
            <Card>
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text>{workout.description}</Card.Text>
                {/* Add a link or button for more details if desired */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Workouts;
