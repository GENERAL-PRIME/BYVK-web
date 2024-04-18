import React from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Activities from "../../pages/Activities/Activities";
import Classes from "../../pages/Classes/Classes";

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
    to: "/classes",
    element: <Classes />,
    text: "Classes",
  },
};

export default NavLinks;
