import Navbar from "./navbar";
import { useState } from "react";
import "../css/components/hamburgerMenu.css";

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
          <button onClick={handleClick} className="burgerBtn" id="bgrClose">
            x
          </button>
            <div id="burgerNav">
             <Navbar />
            </div>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={handleClick} className="burgerBtn" id="bgrOpen">
        +
      </button>
    </>
  );
};
export default HamburgerMenu;
