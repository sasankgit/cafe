import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this is correctly configured
import "../styles/Login.css";
import coffeeImage from "../assets/coffee-cup.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGuestLogin = () => {
    navigate("/dashboard");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
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
              type="email"
              placeholder="Email"
              className="input-field animate-slide"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field animate-slide delay"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
