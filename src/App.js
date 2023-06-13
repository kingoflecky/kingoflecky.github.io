import React from "react";
import "./App.css";
import NavbarRouter from "./components/navbarRouter";
import HamburgerMenu from "./components/hamburgerMenu";
import { isMobile } from "react-device-detect";
import SiteTitle from "./components/siteTitle.js";


function App() {

  return (
    <>
      <div className="App">
        <HamburgerMenu />
        <NavbarRouter />
      </div>
    </>
  );
}

export default App;
