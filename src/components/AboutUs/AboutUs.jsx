import React from "react";
import "./AboutUs.css"; // Import your CSS file for styling
// Import your image file

function AboutUs(props) {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img src={props.image} alt="About Us" />
      </div>
      <div className="text-container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutUs;
