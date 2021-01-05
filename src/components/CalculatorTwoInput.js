import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/history';


const CalculatorTwoInput = ( props ) => {

    const [ input1, setInput1 ] = useState(0);
    const [ operator, setOperator ] = useState( "+" );
    const [ input2, setInput2 ] = useState(0);
    const [ result, setResult ] = useState(0);
    const [ newHistory, setNewHistory ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {

        switch ( operator ) {
            case "+":
                setResult( Number( input1 ) + Number(input2) );
                break;
            case "-":
                setResult( Number( input1 ) - Number(input2) );
                break;
            case "*":
                setResult( Number( input1 ) * Number(input2) );
                break;
            case "/":
                setResult( Number( input1 ) / Number(input2) );
                break;
            default:
                break;
        }  

        setNewHistory(`${input1}${operator}${input2}=${result}`);
    }, [input1, input2, operator, result]);


    const addEquation = ( event ) => {
        
         event.preventDefault();
         dispatch(addToHistory(newHistory));    
    }

    const resetCalculator = () => {
        setInput1("0");
        setInput2("0");
        setResult(0);
    }

    return (
        <>
            <form id="form" className="display-box">
                <label htmlFor="input1">
                    <input id="input1" type="number" value={ input1 } onChange={e => { setInput1( e.target.value )}}/>
                </label>

                <label htmlFor="operator">
                    <select id="operator" value={ operator } onChange={e => { setOperator( e.target.value )}}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </label>
                
                <label htmlFor="input2">
                    <input id="input2" type="number" value={input2} onChange={e => { setInput2( e.target.value )}}/>
                </label>

                <p className="display-screen">{newHistory}</p>
               
                <button id="resetButton" type="submit" value="Reset Calculator" onClick={ resetCalculator }>Reset Calculator</button>

                <button id="submitButton" className="light-button" type="submit" value="Add Equation to History" onClick={ addEquation }>Add Equation to History</button> 
            </form>

        </>
    )
}

export default CalculatorTwoInput;