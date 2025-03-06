// src/pages/AddWorkout.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddWorkout() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  // We'll rename the second field to "duration" to match the required field from your sample
  // Alternatively, if you want to keep "description" in the UI, just send it as "duration: description" below.

  const handleAddWorkout = async (e) => {
    e.preventDefault();

    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to add a workout!");
        return;
      }

      // Make a POST request to /workouts/addWorkout
      const response = await fetch("https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // attach token for auth
        },
        body: JSON.stringify({
          name: name,
          duration: duration
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Workout added successfully!");
      } else {
        alert(data.message || "Failed to add workout");
      }

      // Reset form
      setName("");
      setDuration("");
    } catch (err) {
      console.error("Error adding workout:", err);
      alert("Something went wrong. Please try again.");
    }
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

            <Form.Group className="mb-4" controlId="workoutDuration">
              <Form.Label>Duration (or Description)</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. 30 mins, 1 hour"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
