import React, { useState } from 'react';
import History from './History';
import { addToHistory } from '../actions/history';
import { useDispatch } from 'react-redux';

function CalculatorOneInput () 
{
    const [ userInput, setUserInput ] = useState("");
    const [ result, setResult ] = useState(0);
    let myNumbers = []; 
    let myOperators = [];
    let newOperatorArray = [];

    const dispatch = useDispatch();


    const breakUpInput = ( event ) => {
        event.preventDefault();
        myNumbers = userInput.split( /[*+/-]/gi );

        let operatorArray = userInput.split(/[0123456789]/);
        for (let i=0; i<operatorArray.length; i++) {
            if (operatorArray[i] !== "") {
                newOperatorArray.push(operatorArray[i]);
            }
        }       
        myOperators = newOperatorArray;

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
            <form onSubmit={ breakUpInput } className="display-box">             
                
                <p id="result" className="centerText">
                    { userInput }
                    { result ? <span>={ result }</span> 
                    : <span></span>}
                </p>
                <label>Enter your equation on one line:</label>
                    <input
                        type="text" 
                        name="userInput" 
                        onChange={ event => { setUserInput( event.target.value ) } }
                        value={ userInput }
                        />
                    <p className="centerText">* Calculator cannot handle brackets or negative numbers at this time</p>
                <button id="calculateButton" type="submit" value="Calculate and Add to History">Calculate and Add to History</button> 
            </form>
            <History />
        </>
    )
}

export default CalculatorOneInput;