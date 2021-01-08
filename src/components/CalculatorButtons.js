import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';



const CalculatorButtons = () => {

    const buttonLabels = [
        { "id" : 'C', "value" : 'C' },
        { "id" : '()', "value" : '()' },
        { "id" : '%', "value" : '%' },
        { "id" : '/', "value" : '/' },
        { "id" : '7', "value" : '7' },
        { "id" : '8', "value" : '8' },
        { "id" : '9', "value" : '9' },
        { "id" : '*', "value" : '*' },
        { "id" : '4', "value" : '4' },
        { "id" : '5', "value" : '5' },
        { "id" : '6', "value" : '6' },
        { "id" : '-', "value" : '-' },
        { "id" : '1', "value" : '1' },
        { "id" : '2', "value" : '2' },
        { "id" : '3', "value" : '3' },
        { "id" : '+', "value" : '+' },
        { "id" : '+/-', "value" : '+/-' },
        { "id" : '0', "value" : '0' },
        { "id" : '.', "value" : '.' },
        { "id" : '=', "value" : '=' }
    ];

    const [ userInput, setUserInput ] = useState("");
    const [ result, setResult ] = useState(0);

    const calculatorButtons = document.querySelectorAll('.calculator-button');
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <>
            <form className="display-box">
                <div className="calculator-display">DISPLAY {userInput}</div>
                <div id="buttons-container">
                    { 
                        buttonLabels.map( (button) => 
                            <button 
                                key={button.id} 
                                value={button.value}
                                className="calculator-button"
                                onClick={ (e) => handleButtonClick(e) }>
                                    {button.value}
                            </button>)
                    }
                </div>
            </form>

        </>
    )
}

export default CalculatorButtons;