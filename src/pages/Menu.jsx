import React, { useState } from "react";
import "../styles/Menu.css";

// Import your images
import chickenSandwich from "../assets/menuimages/chicken sandwich.jpeg";
import comboTeaVegSandwich from "../assets/menuimages/combo tea and veg sandwich.jpeg";
import cornSoup from "../assets/menuimages/corn soup.jpeg";
import eggRoll from "../assets/menuimages/egg roll.jpeg";
import paneerKabab from "../assets/menuimages/paneer kabab.jpeg";
import samosa from "../assets/menuimages/samosa.jpeg";
import sandwich from "../assets/menuimages/sandwich.jpeg";
import vegManchuria from "../assets/menuimages/veg manchuria.jpeg";

const menuItems = [
  {
    name: "Chicken Sandwich",
    image: chickenSandwich,
    description: "Grilled chicken breast with fresh lettuce and mayo.",
  },
  {
    name: "Combo Tea & Veg Sandwich",
    image: comboTeaVegSandwich,
    description: "Classic veg sandwich paired with a warm masala tea.",
  },
  {
    name: "Corn Soup",
    image: cornSoup,
    description: "Creamy sweet corn soup topped with spring onions.",
  },
  {
    name: "Egg Roll",
    image: eggRoll,
    description: "Egg wrapped in paratha with spicy onions and chutney.",
  },
  {
    name: "Paneer Kabab",
    image: paneerKabab,
    description: "Char-grilled paneer cubes marinated in spices.",
  },
  {
    name: "Samosa",
    image: samosa,
    description: "Crispy pastry filled with spicy mashed potatoes.",
  },
  {
    name: "Sandwich",
    image: sandwich,
    description: "Classic toast sandwich with veggies and green chutney.",
  },
  {
    name: "Veg Manchuria",
    image: vegManchuria,
    description: "Crispy veggie balls tossed in spicy Indo-Chinese sauce.",
  },
];

export default function Menu() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Special Menu</h1>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              {expandedIndex === index && (
                <p className="menu-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
