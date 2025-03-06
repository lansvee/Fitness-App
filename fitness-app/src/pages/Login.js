// src/pages/Login.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to your server's /login endpoint
      const response = await fetch("https://fitnessapp-api-ln8u.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // If the server responded with a token, store it (e.g. localStorage)
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
          // TODO: Redirect or update UI as needed
          // e.g. window.location = "/dashboard";
        } else {
          // If no token but the response was still OK, handle accordingly
          alert(data.message || "Login succeeded, but no token was provided.");
        }
      } else {
        // Handle invalid credentials or other errors
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
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
