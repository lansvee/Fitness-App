// src/pages/Register.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.css"; // Make sure this file exists

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your actual registration logic
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="register-card p-4">
            <h2 className="register-title text-center mb-4">Register</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="register-btn w-100">
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
