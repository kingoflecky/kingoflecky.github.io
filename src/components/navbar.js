import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../pages/navbar/about";
import "../pages/navbar/contact";
import "./home";
import "../pages/navbar/reactWork";
import "../pages/navbar/portfolio";

function Navbar() {
  return (
    <>
      <nav className="navBar">
        <Link to="/about" className="navLink">
          ABOUT{" "}
        </Link>
        <Link to="/portfolio" className="navLink">
          PORTFOLIO
        </Link>
        <Link to="/contact" className="navLink">
          CONTACT
        </Link>
        <Link to="/reactWork" className="navLink">
          REACT
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
