// src/components/WorkoutCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

export default function WorkoutCard({ name, duration, status }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Duration:</strong> {duration}
          <br />
          <strong>Status:</strong> {status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
