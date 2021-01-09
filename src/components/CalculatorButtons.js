import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';
import History from './History';
import handleDoubleOperators from './calculator-components/HandleDoubleOperators';
import GetNumbersArray from './calculator-components/getNumbersArray';


const CalculatorButtons = () => {

    const buttonLabels = [
        { "id" : 'C', "value" : 'C', "type": "button" },
        { "id" : '()', "value" : '()', "type": "button" },
        { "id" : '%', "value" : '%', "type": "button" },
        { "id" : '/', "value" : '/', "type": "button" },
        { "id" : '7', "value" : '7', "type": "button" },
        { "id" : '8', "value" : '8', "type": "button" },
        { "id" : '9', "value" : '9', "type": "button" },
        { "id" : '*', "value" : '*', "type": "button" },
        { "id" : '4', "value" : '4', "type": "button" },
        { "id" : '5', "value" : '5', "type": "button" },
        { "id" : '6', "value" : '6', "type": "button" },
        { "id" : '-', "value" : '-', "type": "button" },
        { "id" : '1', "value" : '1', "type": "button" },
        { "id" : '2', "value" : '2', "type": "button" },
        { "id" : '3', "value" : '3', "type": "button" },
        { "id" : '+', "value" : '+', "type": "button" },
        { "id" : '+/-', "value" : '+/-', "type": "button" },
        { "id" : '0', "value" : '0', "type": "button" },
        { "id" : '.', "value" : '.', "type": "button" }
    ];

    const [ userInput, setUserInput ] = useState("");
    const [ result, setResult ] = useState(0);
    let myNumbers = []; 
    let myOperators = [];
    let newOperatorArray = [];

    const dispatch = useDispatch();

    const handleButtonClick = (e) => {
        e.preventDefault();
        
        // Capture the button value as newUserInput
        let newUserInput = e.target.value;

        // Add newUserInput to a temporary equation string 
        let tempUserEquation = userInput.concat(newUserInput);
      
        // Update userInput state to match temporary equation
        setUserInput(tempUserEquation);    
    };

    const calculate = (event) => {
        event.preventDefault();
        doMath();
        giveFinalResult();
    }

    const breakUpInput = () => {
        let simplifiedUserEquation = handleDoubleOperators(userInput);

        // Capture the numbers by breaking up the string by the operators
        myNumbers = GetNumbersArray(simplifiedUserEquation);
        console.log(myNumbers);

        // Capture the operators by removing the numbers (digits from 0-9)
        let operatorArray = simplifiedUserEquation.split(/[0123456789]/);
        for (let i=0; i<operatorArray.length; i++) {
            if (operatorArray[i] !== "") {
                newOperatorArray.push(operatorArray[i]);
            }
        }       
        myOperators = newOperatorArray;
        console.log(myOperators);
    }

    const doMath = () => {
        breakUpInput();
        if (myOperators.includes("*" || "/")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "*" ) {
                    let tempResult = (Number(myNumbers[i]) * Number(myNumbers[i+1]));
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, String(tempResult));
                } 
                if ( myOperators[i] === "/" ) {
                    let tempResult = Number((myNumbers[i]) / Number(myNumbers[i+1]));
                     myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, String(tempResult));
                }
            }                     
            if (myOperators.includes("+" || "-")) {
                for (let i=0; i<myOperators.length; i++) {
                
                    if ( myOperators[i] === "+" ) {
                        let tempResult = (Number(myNumbers[i]) + Number(myNumbers[i+1]));
                        myOperators.splice(i, 1);
                        myNumbers.splice(i, 2, String(tempResult));
                    } 
                    if ( myOperators[i] === "-" ) {
                        let tempResult = (Number(myNumbers[i]) - Number(myNumbers[i+1]));
                        myOperators.splice(i, 1);
                        myNumbers.splice(i, 2, String(tempResult));
                    }
                }
            }
        }
    }

    const giveFinalResult = () => {
        setResult( myNumbers );
        addEquation();    
    }
 
    const addEquation = ( ) => {
        let newHistory = `${userInput}=${myNumbers}`;
        dispatch(addToHistory(newHistory));    
   }

    return (
        <>
            <form onSubmit={ calculate } className="display-box" method="post">

                <div className="calculator-display">{result}</div>
                <div id="buttons-container">
                    { 
                        buttonLabels.map( (button) => 
                            <button 
                                key={button.id} 
                                value={button.value}
                                type={button.type}
                                className="calculator-button"
                                onClick={ (e) => handleButtonClick(e) }>
                                    {button.value}
                            </button>)
                    }
                    <button type="submit" className="calculator-button" value="=">=</button>
                </div>
            </form>
            <History />
        </>
    )
}

export default CalculatorButtons;