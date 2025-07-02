import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import signupImage from "../assets/coffee-beans.png"; // Make sure this image exists

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'll use Firebase auth logic later.
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup data:", formData);
    // firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)...
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <img src={signupImage} alt="Signup Coffee" className="signup-image" />
        </div>

        <div className="signup-right">
          <h2 className="signup-title">Join Us</h2>
          <p className="signup-subtitle">Create an account and enjoy your brew 🍵</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field animate-slide"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field animate-slide delay"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field animate-slide delay2"
              required
            />
            <button className="signup-button animate-pop">Sign Up</button>
          </form>
          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
