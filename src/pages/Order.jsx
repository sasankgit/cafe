import React, { useState } from "react";
import "../styles/Order.css";

const foodItems = [
  { name: "Cappuccino", price: 150 },
  { name: "Espresso", price: 100 },
  { name: "Latte", price: 140 },
  { name: "Cold Brew", price: 160 },
  { name: "Chocolate Muffin", price: 80 },
  { name: "Croissant", price: 90 },
];

const addonsList = [
  { label: "Extra Shot", price: 30 },
  { label: "Whipped Cream", price: 20 },
  { label: "Soy Milk", price: 25 },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for table ${table}! Total: ₹${calculateTotal()}`);
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
