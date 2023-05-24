import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import '../pages/navbar/about';
import '../pages/navbar/contact';
import './home'
import '../pages/navbar/photography';
import '../pages/navbar/portfolio'

function Navbar() {
    return (
        <>
            <header className="header">

                <div className="title"><Link to="/">Lewis Quinn</Link></div>

                <nav className="navBar">
                    <Link to="/about" className="navLink">About </Link>
                    <Link to="/portfolio" className="navLink">Portfolio</Link>
                    <Link to="/contact" className="navLink">Contact</Link>
                    <Link to="/photography" className="navLink">Photography</Link>
                </nav>

            </header>
        </>
    )
};

export default Navbar
