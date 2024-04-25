import React from "react";
import { Route, Routes } from "react-router-dom";
import NavLinks from "../../assets/Data/NavLinks";
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle";

function AppRouter() {
  return (
    <Routes>
      {Object.values(NavLinks).map((link) => (
        <Route exact key={link.to} path={link.to} element={link.element} />
      ))}
    </Routes>
  );
}

export default AppRouter;
