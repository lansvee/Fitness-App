// src/pages/Register.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // Import Notyf's CSS
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [mobileNo, setMobileNo]   = useState("");

  const navigate = useNavigate();
  const notyf = new Notyf(); // Instantiate Notyf

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fitnessapp-api-ln8u.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          firstName,
          lastName,
          email,
          password,
          mobileNo
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Registration success
        notyf.success(data.message || "Registration successful!");
        // Optionally redirect to login or wherever you want
        navigate("/login");
      } else {
        // Registration failed (e.g., email in use, validation error, etc.)
        notyf.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      notyf.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Container fluid className="register-container">
      <Row
        className="align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <Col xs={12} sm={10} md={8} lg={5} xl={4}>
          <div className="register-card p-4">
            <h2 className="register-title text-center mb-4">Register</h2>

            <Form onSubmit={handleSubmit}>
              {/* First Name */}
              <Form.Group className="mb-3" controlId="registerFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Last Name */}
              <Form.Group className="mb-3" controlId="registerLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Email */}
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

              {/* Password */}
              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Mobile Number */}
              <Form.Group className="mb-4" controlId="registerMobileNo">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mobile number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
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
