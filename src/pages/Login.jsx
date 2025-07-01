import React from "react";
import "../pages/Login.css";
import coffeeImage from "../assets/coffee-cup.png"; // Put your image in `assets` folder

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <img src={coffeeImage} alt="Coffee Showcase" className="showcase-image" />
        </div>

        <div className="login-right">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Log in to continue sipping ☕</p>
          <form className="login-form">
            <input type="text" placeholder="Username" className="input-field animate-slide" />
            <input type="password" placeholder="Password" className="input-field animate-slide delay" />
            <button className="login-button animate-pop">Login</button>
          </form>
          <p className="signup-text">
            New here? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
