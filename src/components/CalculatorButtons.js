import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';
import History from './History';
import handleDoubleOperators from './calculator-components/HandleDoubleOperators';
import GetNumbersArray from './calculator-components/getNumbersArray';
import GetOperatorsArray from './calculator-components/GetOperatorsArray';


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
    const [ equation, setEquation ] = useState();
    const [ result, setResult ] = useState(0);
    const dispatch = useDispatch();
    let myNumbers = []; 
    let myOperators = [];

    useEffect(() => {
        console.log("Equation-change!");
    }, [ equation ]);

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
        // Simplify user input -> handle double operators ('++', '--', '+-' , '-+')
        let simplifiedUserEquation = handleDoubleOperators(userInput);
        console.log("simplified", simplifiedUserEquation);
        setEquation(simplifiedUserEquation); 
        console.log("equation", equation);
    

        // Capture the numbers by breaking up the string by the operators
        myNumbers = GetNumbersArray(simplifiedUserEquation);
        console.log(myNumbers);

        // Capture the operators by removing the numbers (digits from 0-9)
        myOperators = GetOperatorsArray(simplifiedUserEquation);
        console.log(myOperators);
    }

    const doMath = () => {
        breakUpInput();
        console.log(myOperators);
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
        }                  
        if (myOperators.includes("+" || "-")) {
            console.log("There's + or - in there!");
            console.log(myOperators);

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

    // Set result state to final number left in myNumbers, then add equation to history in Redux store with addEquation function
    const giveFinalResult = () => {
        setResult( myNumbers );
        addEquation();    
    }
    
    // Add equation to history in Redux store
    const addEquation = ( ) => {
        let newHistory = `${equation}=${myNumbers}`;
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