import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav id="nav">
            <ul id="nav-ul">
                <li className="nav-button">
                    <button id="hamburger-menu"><i className="fas fa-bars"></i></button>
                </li>
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/calculator-one-input">One-input Calculator</Link>
                </li>
                <li className="nav-link">
                    <Link to="/calculator-two-input">Two-input Calculator</Link>
                </li>
                <li className="nav-link">
                    <Link to="/calculator-buttons">Calculator with Buttons</Link>
                </li>
                <li className="nav-link">
                    <Link to="/History">History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;