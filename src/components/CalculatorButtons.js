import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';


const CalculatorButtons = () => {

    const buttonLabels = ['C', '()', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '=' ];

    return (
        <>
            <form className="display-box">
               <div id="buttons-container">
                    { 
                        buttonLabels.map( (button) => 
                            <button className="calculator-button">
                                {button}
                            </button>)
                    }
               </div>
            </form>

        </>
    )
}

export default CalculatorButtons;