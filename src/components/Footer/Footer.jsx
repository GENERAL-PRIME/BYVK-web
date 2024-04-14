import React from "react";
import "./Footer.css";
import fblogo from "../../assets/Images/facebook-svgrepo-com.svg";
import ytlogo from "../../assets/Images/youtube-168-svgrepo-com.svg";
import instalogo from "../../assets/Images/instagram-svgrepo-com.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Quick Links</h3>
        <a href="">Home</a>
        <a href="about">About</a>
        <a href="activities">Activities</a>
        <a href="contact">Contact</a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Barasat Yoga Vigyan Kendra</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank">
          <img src={fblogo}></img>
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src={instalogo}></img>
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src={ytlogo}></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
