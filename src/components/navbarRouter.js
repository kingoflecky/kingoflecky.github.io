import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar.js";
import Homepage from "../components/home";
import About from "../pages/navbar/about";
import Contact from "../pages/navbar/contact";
import Portfolio from "../pages/navbar/portfolio";
import ReactWork from "../pages/navbar/reactWork";
import SiteTitle from "./siteTitle.js";
import HamburgerMenu from "./hamburgerMenu.js";
import "../css/components/navbarRouter.css";

const NavbarRouter = () => {
  return (
    <Router>
      <SiteTitle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reactWork" element={<ReactWork />} />
      </Routes>
    </Router>
  );
};

export default NavbarRouter;
