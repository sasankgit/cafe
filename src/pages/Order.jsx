import React, { useState } from "react";
import { db } from "../firebase"; // <-- make sure this is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../styles/Order.css";

const foodItems = [
  { name: "chicken sandwich", price: 150 },
  { name: "combo tea and sandwich", price: 100 },
  { name: "corn soup", price: 140 },
  { name: "egg roll", price: 160 },
  { name: "paneer kabab", price: 80 },
  { name: "samosa", price: 90 },
  { name: "sandwich", price: 90 },
  { name: "veg manchuria", price: 90 },
];

const addonsList = [
  { label: "Extra pepper", price: 30 },
  { label: "Whipped onions", price: 20 },
  { label: "mayo", price: 25 },
];

export default function Order() {
  const [selectedFood, setSelectedFood] = useState(foodItems[0]);
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState([]);
  const [table, setTable] = useState("");

  const toggleAddon = (label) => {
    setAddons((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const calculateTotal = () => {
    const foodTotal = selectedFood.price * quantity;
    const addonTotal = addons.reduce((sum, label) => {
      const addon = addonsList.find((a) => a.label === label);
      return sum + (addon ? addon.price : 0);
    }, 0);
    return foodTotal + addonTotal;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      food: selectedFood.name,
      price: selectedFood.price,
      quantity,
      addons,
      table,
      total: calculateTotal(),
      timestamp: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      alert(`Order placed for table ${table}! Total: ₹${order.total}`);
      // Reset form
      setSelectedFood(foodItems[0]);
      setQuantity(1);
      setAddons([]);
      setTable("");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to save order. Please try again.");
    }
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Place Your Order</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          Select Food:
          <select
            className="input-field"
            value={selectedFood.name}
            onChange={(e) =>
              setSelectedFood(
                foodItems.find((item) => item.name === e.target.value)
              )
            }
          >
            {foodItems.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name} - ₹{item.price}
              </option>
            ))}
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            min="1"
            max="10"
            className="input-field"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>

        <label>
          Add-ons:
          <div className="addon-group">
            {addonsList.map((addon) => (
              <label key={addon.label} className="addon-option">
                <input
                  type="checkbox"
                  checked={addons.includes(addon.label)}
                  onChange={() => toggleAddon(addon.label)}
                />
                {addon.label} (+₹{addon.price})
              </label>
            ))}
          </div>
        </label>

        <label>
          Table Number:
          <input
            type="text"
            className="input-field"
            placeholder="e.g., T5"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required
          />
        </label>

        <div className="total-display">Total: ₹{calculateTotal()}</div>
        <button type="submit" className="order-button animate-pop">
          Add to Cart
        </button>
      </form>
    </div>
  );
}
