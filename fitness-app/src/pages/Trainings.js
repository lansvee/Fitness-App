// src/pages/Trainings.js
import React from "react";
// Optionally import the same CSS from Home, or create a separate file like "Trainings.css"
import "./Trainings.css"; // If you choose to separate styling

function Trainings() {
  // Sample data of available trainings
  const trainingsData = [
    {
      id: 1,
      title: "Personal Training",
      image:
        "https://res.cloudinary.com/dtash1hd9/image/upload/v1741175850/8a494bfd98f3da23568f3b210137c751_iofilv.jpg",
      description: "Customized 1-on-1 sessions focusing on your individual goals."
    },
    {
      id: 2,
      title: "Group Fitness Classes",
      image:
        "https://res.cloudinary.com/dtash1hd9/image/upload/v1741175653/50d9d2dae115555a45cb8d040401ddf5_olnkzt.jpg",
      description:
        "Motivational, high-energy classes for all fitness levels."
    },
    {
      id: 3,
      title: "Functional Training",
      image:
        "https://res.cloudinary.com/dtash1hd9/image/upload/v1741178103/e565f0182fc89d0d7d44dbe5d1c96eee_ds6xkt.jpg",
      description:
        "Improve everyday movements with dynamic strength exercises."
    },
    {
      id: 4,
      title: "Pilates",
      image:
        "https://res.cloudinary.com/dtash1hd9/image/upload/v1741175850/1ae7feefd1eb063ae0cb12903d24b14f_nxmhlr.jpg",
      description: "Core-strengthening routines for balance and flexibility."
    },
    {
      id: 5,
      title: "HIIT Sessions",
      image:
        "https://res.cloudinary.com/dtash1hd9/image/upload/v1741274668/af563a260521813c96eea5bc20fd0dbe_qowjhj.jpg",
      description:
        "Short bursts of intense effort for maximum calorie burn."
    }
  ];

  return (
    <div className="trainings-page">
      {/* Optional: A hero banner or a simple heading */}
      <section className="hero-section" style={{ minHeight: "40vh" }}>
        <div className="hero-content">
          <h1 className="hero-main-title" style={{ fontSize: "3rem" }}>
            Our Training Programs
          </h1>
          <p className="hero-desc" style={{ color: "#fff", maxWidth: "600px" }}>
            Explore our range of fitness classes and training sessions to find
            the perfect fit for your goals.
          </p>
        </div>
      </section>

      {/* Main trainings list */}
      <section className="trainings-section" id="all-trainings">
        <div className="trainings-header">
          <h2>Available Trainings</h2>
          {/* Remove or modify the link if you don't need "see all" here */}
          <a href="#all-trainings" className="see-all-link">
            See All
          </a>
        </div>

        <div className="trainings-list">
          {trainingsData.map((training) => (
            <div className="training-item" key={training.id}>
              <img src={training.image} alt={training.title} />
              <h4>{training.title}</h4>
              <p style={{ marginTop: "0.5rem" }}>{training.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (optional, similar to Home) */}
      <footer className="home-footer">
        <p>© 2025 THE ROW. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Trainings;
