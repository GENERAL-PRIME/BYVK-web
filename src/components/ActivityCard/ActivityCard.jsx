import React from "react";
import ActivityData from "../../assets/Data/ActivityData.jsx";
import "./ActivityCard.css";

export default function ActivityCard(activity) {
  return (
    <div className="actCard">
      {Object.values(ActivityData).map((card) => (
        <div key={card.id} className="actCarditem">
          <img src={card.image} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
