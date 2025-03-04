// src/pages/Workouts.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkoutCard from '../components/WorkoutCard';

export default function Workouts() {
  // Sample data
  const workouts = [
    { id: 1, name: 'Push Ups', duration: '10 mins', status: 'pending' },
    { id: 2, name: 'Pull Ups', duration: '20 mins', status: 'pending' }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Workouts</h2>
      <Row>
        {workouts.map((workout) => (
          <Col md={4} key={workout.id} className="mb-3">
            <WorkoutCard {...workout} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
