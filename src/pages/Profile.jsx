import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./Profile.css";

export default function Profile() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      setUsername(email.split("@")[0]);

      const q = query(collection(db, "orders"), where("user", "==", email));
      const snapshot = await getDocs(q);
      let sum = 0;

      snapshot.forEach(doc => {
        const data = doc.data();
        sum += data.total || 0;
      });

      setTotalSpent(sum);
      calculateRewards(sum);
    };

    fetchOrders();
  }, []);

  const calculateRewards = (total) => {
    const rewards = [];
    if (total >= 100) rewards.push("Coffee Fan");
    if (total >= 300) rewards.push("Espresso Elite");
    if (total >= 600) rewards.push("Cappuccino Connoisseur");
    if (total >= 1000) rewards.push("Premium Member");

    setRewards(rewards);
  };

  const getProgress = () => {
    const max = 1000;
    return Math.min((totalSpent / max) * 100, 100);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Hello, {username} ☕</h1>

      <div className="meter-box">
        <div className="meter-label">Coffee Meter: ₹{totalSpent}</div>
        <div className="meter-bar">
          <div className="meter-fill" style={{ width: `${getProgress()}%` }}></div>
        </div>
      </div>

      <div className="reward-section">
        <h2>Your Rewards:</h2>
        {rewards.length === 0 ? (
          <p>No rewards yet. Order more to earn badges!</p>
        ) : (
          <ul className="reward-list">
            {rewards.map((badge, i) => (
              <li key={i} className="reward-badge">{badge}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
