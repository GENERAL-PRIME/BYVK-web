import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./Styles/App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
