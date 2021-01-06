import React, { useState, useEffect } from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    const [screenSize, setScreenSize] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        console.log(windowWidth);
        checkScreenSize(); 
    };

    const checkScreenSize = () => {
        
        (windowWidth < 600)
        ? setScreenSize(true)
        : setScreenSize(false);
        //console.log(screenSize);
    }

    useEffect(() => {
        resizeWindow();
        console.log("Running useEffect!");

        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <nav id="nav">
            
            <ul>
                <button className="hamburger-menu"><i className="fas fa-bars"></i></button>
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
                    <Link to="/calculator-buttons">Calculator with Buttons</Link>
                </li>
                <li>
                    <Link to="/History">History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;