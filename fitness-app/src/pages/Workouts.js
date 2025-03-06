// src/pages/Workouts.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // 1) Retrieve token from localStorage
    const token = localStorage.getItem("token");

    // If no token, user isn't logged in → optionally alert or redirect
    if (!token) {
      alert("You must be logged in to view your workouts!");
      return;
    }

    // 2) Fetch workouts from /workouts/getMyWorkouts
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Server might return something like:
          // { workouts: [ { _id, name, duration }, ... ] }
          // or it might return an array directly.
          // Adjust based on your actual response shape.
          setWorkouts(data.workouts || []); 
        } else {
          alert(data.message || "Failed to fetch workouts");
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
        alert("An error occurred while fetching workouts");
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Workouts</h2>
      <Row>
        {workouts.map((workout) => (
          <Col md={4} className="mb-4" key={workout._id}>
            <Card>
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                {/* If your endpoint returns "duration" or "description," adjust accordingly */}
                <Card.Text>{workout.duration}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {workouts.length === 0 && (
          <p className="mt-3">No workouts found.</p>
        )}
      </Row>
    </Container>
  );
}

export default Workouts;
