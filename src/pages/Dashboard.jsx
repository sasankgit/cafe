import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import vitlogo from "../assets/vitap.png";
import userIcon from "../assets/user-icon.png";

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      const name = email.split("@")[0];
      setUsername(name);
    }
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="dashboard-container">
      {/* Header: User profile and VIT-AP logo */}
      <div className="dashboard-header">
        <div className="profile-section" onClick={handleProfileClick}>
          <img src={userIcon} alt="User" className="profile-image" />
          <span className="profile-name">{username}</span>
        </div>
        <div className="vit-logo-container">
          <img src={vitlogo} alt="VIT-AP Logo" className="vit-logo" />
        </div>
      </div>

      {/* Title */}
      <h1 className="dashboard-title">Welcome to the Café Dashboard</h1>

      {/* Navigation Cards */}
      <div className="nav-buttons">
        <div className="nav-card" onClick={() => handleRedirect("/menu")}>
          <h2 className="nav-label">Menu</h2>
          <p className="nav-info">Explore our handcrafted beverages and snacks.</p>
        </div>

        <div className="nav-card" onClick={() => handleRedirect("/reservation")}>
          <h2 className="nav-label">Reservation</h2>
          <p className="nav-info">Book your table in advance with ease.</p>
        </div>

        <div className="nav-card" onClick={() => handleRedirect("/order")}>
          <h2 className="nav-label">Order</h2>
          <p className="nav-info">Order your favorite drinks for takeaway.</p>
        </div>
      </div>
    </div>
  );
}
