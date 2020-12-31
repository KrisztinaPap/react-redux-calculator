import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav id="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calculator-one-input">One-input Calculator</Link>
                </li>
                <li>
                    <Link to="/calculator-two-input">Two-input Calculator</Link>
                </li>
                <li>
                    <Link to="/History">History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;