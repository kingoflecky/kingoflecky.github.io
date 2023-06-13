import Navbar from "./navbar";
import { useState } from "react";
import "../css/components/hamburgerMenu.css";
import { BrowserRouter as Router } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (!menuOpen) {
      setMenuOpen(true);
    }
  };

  if (menuOpen) {
    return (
      <>
        <div className="burgerOpenWrapper">
          <button onClick={handleClick} className="burgerBtn">
            -
          </button>
          <p>menu open</p>
          <Router>
            <div className="header">
              <Navbar />
            </div>
          </Router>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={handleClick} className="burgerBtn">
        +
      </button>
    </>
  );
};
export default HamburgerMenu;
