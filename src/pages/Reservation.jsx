import React, { useState } from "react";
import "../styles/Reservation.css";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", formData);
    alert("Reservation submitted successfully!");
    // You can send `formData` to Firebase later
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Book a Table</h1>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field animate-slide"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="input-field animate-slide delay"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="input-field animate-slide delay2"
        />
        <input
          type="number"
          name="people"
          placeholder="Number of People"
          value={formData.people}
          onChange={handleChange}
          min="1"
          max="20"
          required
          className="input-field animate-slide delay3"
        />
        <button type="submit" className="reserve-button animate-pop">Reserve</button>
      </form>
    </div>
  );
}
