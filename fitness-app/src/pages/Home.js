// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="mb-4">Build Your Ideal Body</h1>
          <p className="mb-4">
            We offer specialized fitness classes for all levels. Join us and
            start your journey towards a stronger, healthier you!
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Col>
        <Col md={6}>
          {/* Replace with an image or illustration that suits your design */}
          <img
            src="https://via.placeholder.com/500x350"
            alt="Fitness"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
