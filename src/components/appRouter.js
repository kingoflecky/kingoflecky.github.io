import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./home";
import About from "../pages/navbar/about";
import Contact from "../pages/navbar/contact";
import Portfolio from "../pages/navbar/portfolio";
import ReactWork from "../pages/navbar/reactWork";
import HamburgerMenu from "./hamburgerMenu.js";
import Header from "./header";
import "../css/components/appRouter.css";
import SiteTitle from "./siteTitle";

// RENAME

const AppRouter = () => {
  return (
    <Router>
      
        <div className="appTitle">
          <SiteTitle />
        </div>
        <div className="appHeader">
          <Header />
        </div>
        <HamburgerMenu />
   
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

export default AppRouter;
