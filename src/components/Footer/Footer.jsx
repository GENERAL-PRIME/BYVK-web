import React from "react";
import "./Footer.css";
import fblogo from "../../assets/Images/facebook-svgrepo-com.svg";
import ytlogo from "../../assets/Images/youtube-168-svgrepo-com.svg";
import instalogo from "../../assets/Images/instagram-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import NavLinks from "../../assets/Data/NavLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Quick Links</h3>
        {Object.values(NavLinks).map((link) => (
          <NavLink key={link.to} to={link.to} className="footerLink">
            {link.text}
          </NavLink>
        ))}
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
}

export default Footer;
