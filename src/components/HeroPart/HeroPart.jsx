import React from "react";
import "./HeroPart.css"; // Import your CSS file for styling

function HeroPart(props) {
  return (
    <div className="con">
      <div
        className="hero"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="activity-container">
          <div className="activity">
            <span>{props.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPart;
