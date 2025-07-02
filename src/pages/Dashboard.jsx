import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Café Dashboard</h1>
      <div className="nav-buttons">
        <div
          className="nav-card"
          onClick={() => handleRedirect("/menu")}
        >
          <h2 className="nav-label">Menu</h2>
          <p className="nav-info">Explore our handcrafted beverages and snacks.</p>
        </div>

        <div
          className="nav-card"
          onClick={() => handleRedirect("/reservation")}
        >
          <h2 className="nav-label">Reservation</h2>
          <p className="nav-info">Book your table in advance with ease.</p>
        </div>

        <div
          className="nav-card"
          onClick={() => handleRedirect("/order")}
        >
          <h2 className="nav-label">Order</h2>
          <p className="nav-info">Order your favorite drinks for takeaway.</p>
        </div>
      </div>
    </div>
  );
}
