import React, { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.png";

function Nav() {
const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

    return (
        <nav>
        <nav className="burger">
            <img 
                src={require("../assets/LL-logo.png")}
                alt="Little Lemon logo"
                className="nav-image">
                </img>
            <button className="burger-icon" onClick={handleToggle}>
                <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
            </button>
        </nav>
        <Navigation device="desktop" />
        {navbarOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    );
};

export default Nav;