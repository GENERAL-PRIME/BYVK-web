import React from "react";
import "./ActivityCard.css";

export default function ActivityCard(props) {
  return (
    <div className="actCard">
      {Object.values(props.object).map((card) => (
        <div key={card.id} className="actCarditem">
          <img src={card.image} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
