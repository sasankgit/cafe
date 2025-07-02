import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css"; // Make sure you place the reused CSS here or rename appropriately
import coffeeImage from "../assets/coffee-cup.png";

export default function Login() {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/dashboard");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to authenticate goes here later (Firebase)
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <img src={coffeeImage} alt="Coffee Showcase" className="signup-image" />
        </div>

        <div className="signup-right">
          <h2 className="signup-title">Welcome Back</h2>
          <p className="signup-subtitle">Log in to continue sipping ☕</p>

          <form className="signup-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className="input-field animate-slide"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field animate-slide delay"
              required
            />
            <button type="submit" className="signup-button animate-pop">
              Login
            </button>
          </form>

          <p className="login-text">
            New here? <Link to="/signup">Create an account</Link>
          </p>

          <button className="guest-button animate-pop" onClick={handleGuestLogin}>
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
