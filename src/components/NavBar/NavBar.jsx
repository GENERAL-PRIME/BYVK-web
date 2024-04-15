import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import NavLinks from "../../assets/Data/NavLinks";
import navLogo from "../../assets/Images/byvk-logo.png";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img className="logo" src={navLogo} alt="BYVK logo" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          {Object.values(NavLinks).map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.text}
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
