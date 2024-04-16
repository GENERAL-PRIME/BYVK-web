import React from "react";
import "./GetInTouch.css";
import phone from "../../assets/Images/call-receive-svgrepo-com.svg";
import mail from "../../assets/Images/email-svgrepo-com.svg";
import location from "../../assets/Images/location-pin-svgrepo-com.svg";

export default function GetInTouch() {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-info">
        <div className="contact-item">
          <img src={phone} alt="phone" />
          <h3>Call Us</h3>
          <p>6290439510/6291251545</p>
        </div>
        <div className="contact-item">
          <img src={mail} alt="mail" />
          <h3>Mail Us</h3>
          <p>barasatyogavigyankendra@gmail.com</p>
        </div>
        <div className="contact-item">
          <a href="https://maps.google.com/maps?q=latitude,longitude"></a>
          <img src={location} alt="location" />
          <h3>Location</h3>
          <p>
            Smami Vivekananda Road, P.O-Barasat, North 24 Parganas PIN-700124,
            WB, India
          </p>
        </div>
      </div>
    </div>
  );
}
