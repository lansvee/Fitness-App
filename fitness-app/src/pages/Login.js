// src/pages/Login.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your actual login logic
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container fluid className="login-container">
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        {/* Adjust column breakpoints to achieve a comfortable width */}
        <Col xs={12} sm={10} md={8} lg={5} xl={4}>
          <div className="login-card p-4">
            <h2 className="login-title text-center mb-4">Login</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="login-btn w-100">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
