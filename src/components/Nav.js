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
                    <Link to="/Calculator">Calculator</Link>
                </li>
                <li>
                    <Link to="/History">History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;