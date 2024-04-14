import React from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Activities from "../../pages/Activities/Activities";
import Conatact from "../../pages/Contact/Contact";

const NavLinks = {
  home: {
    to: "/",
    element: <Home />,
    text: "Home",
  },
  about: {
    to: "/about",
    element: <About />,
    text: "About",
  },
  activities: {
    to: "/activities",
    element: <Activities />,
    text: "Activities",
  },
  contact: {
    to: "/contact",
    element: <Conatact />,
    text: "Contact Us",
  },
};

export default NavLinks;
