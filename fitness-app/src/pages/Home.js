// src/pages/Home.js

import React from "react";
import NavigationBar from "../components/NavigationBar"; // Adjust the relative path as needed
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-title">ACHIEVE YOUR FITNESS GOALS</p>
          <h1 className="hero-main-title">FIND YOUR STRENGTH</h1>
          <h2 className="hero-sub-title">INSIDE AND OUT.</h2>
          <p className="hero-desc">
            We are dedicated to helping you achieve your fitness goals and
            improve your overall health and well-being.
          </p>
        </div>
      </section>

      {/* CALL-TO-ACTION / MIDDLE SECTION */}
      <section className="mid-section">
        <div className="cta-content">
          <h3>FITNESS SHOULD BE ACCESSIBLE TO EVERYONE.</h3>
          <p>
            Whether you’re a seasoned athlete or just starting out, we have a
            variety of classes to suit your needs: cardio
            machines, weightlifting, group fitness areas, and more—providing a
            comprehensive workout experience.
          </p>
          <button className="cta-btn">Join Today</button>
        </div>
      </section>

      {/* TRAININGS SECTION */}
      <section className="trainings-section" id="trainings">
        <div className="trainings-header">
          <h2>TRAININGS</h2>
          <a href="#all-trainings" className="see-all-link">
            See All
          </a>
        </div>

        <div className="trainings-list">
          <div className="training-item">
            <img
              src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741175850/8a494bfd98f3da23568f3b210137c751_iofilv.jpg"
              alt="Personal Training"
            />
            <h4>Personal Training</h4>
          </div>
          <div className="training-item">
            <img
              src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741175653/50d9d2dae115555a45cb8d040401ddf5_olnkzt.jpg"
              alt="Group Fitness"
            />
            <h4>Group Fitness Classes</h4>
          </div>
          <div className="training-item">
            <img
              src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741178103/e565f0182fc89d0d7d44dbe5d1c96eee_ds6xkt.jpg"
              alt="Functional Training"
            />
            <h4>Functional Training</h4>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <p>© 2025 ZONIXX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
