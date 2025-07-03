import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../styles/reservation.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "reservations"), {
        name: formData.name,
        date: formData.date,
        time: formData.time,
        people: parseInt(formData.people),
        timestamp: Timestamp.now(),
      });

      alert("Reservation saved to Firebase!");
      setFormData({ name: "", date: "", time: "", people: 1 });
    } catch (error) {
      console.error("Error saving reservation:", error);
      alert("Failed to save reservation.");
    }
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
