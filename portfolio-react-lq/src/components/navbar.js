import React from 'react';
import '../css/navbar.css';
import './about';
import './contact';
import './photography';
import './portfolio'

export function Navbar(props) {
    return (
        <>
            <header className="header">

                <div className="title">Lewis Quinn</div>

                <nav className="navBar">
                    <div className="navLink"><a href="./about">About</a></div>
                    <div className="navLink"><a href="./portfolio">Portfolio</a></div>
                    <div className="navLink"><a href="./contact">Contact</a></div>
                    <div className="navLink"><a href="./photography">Photography</a></div>
                </nav>

            </header>
        </>
    )
};
