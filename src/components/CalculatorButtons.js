import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';
import History from './History';



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
        console.log("new user input: ", newUserInput);

        //Check if buttons clicked was '=' as that should submit form
        if(newUserInput === '=')
        {
            console.log("pressed equal!");
            document.getElementById('buttonForm').submit();
        } else 
        {
            // Add newUserInput to a temporary equation string 
            let tempUserEquation = userInput.concat(newUserInput);
            console.log("temp user input string with new input: ", tempUserEquation);

            // Update userInput state to match temporary equation
            setUserInput(tempUserEquation);        
        }
    };

    const breakUpInput = (e) => {
        e.preventDefault();
        myNumbers = userInput.split( /[*+/-]/gi );
        console.log("my numbers: ", myNumbers);

        let operatorArray = userInput.split(/[0123456789]/);
        for (let i=0; i<operatorArray.length; i++) {
            if (operatorArray[i] !== "") {
                newOperatorArray.push(operatorArray[i]);
            }
        }       
        myOperators = newOperatorArray;
        console.log("my operators: ", myOperators);

        doMultiplication();
        doDivision();
        doAddition();
        doSubtraction();
        giveFinalResult(); 
    }

    const doMultiplication = ( ) => {

        while (myOperators.includes("*")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "*" ) {
                    let tempResult = (myNumbers[i] * myNumbers[i+1]);
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doDivision = ( ) => {

        while (myOperators.includes("/")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "/" ) {
                    let tempResult = (myNumbers[i] / myNumbers[i+1]);
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doAddition = ( ) => {

        while (myOperators.includes("+")) {
            for (let i=0; i<myOperators.length; i++) {
            
                if ( myOperators[i] === "+" ) {
                    let tempResult = (Number(myNumbers[i]) + Number(myNumbers[i+1]));
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
                } 
            }
        }
    }

    const doSubtraction = ( ) => {
        while (myOperators.includes("-")) {
            for (let i=0; i<myOperators.length; i++) {
       
                if ( myOperators[i] === "-" ) {
                    let tempResult = (Number(myNumbers[i]) - Number(myNumbers[i+1]));
                    myOperators.splice(i, 1);
                    myNumbers.splice(i, 2, tempResult);
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
            <form onSubmit={ breakUpInput } className="display-box" method="post">

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