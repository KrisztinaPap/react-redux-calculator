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

    return (
        <>
            <div id="displayBox">
                <h2>Your current equation:</h2>
                <p className="centerText">{newHistory}</p>
            </div>
            <form id="form" className="light-box">
                <label htmlFor="input1">Enter a number:</label>
                <input id="input1" type="number" value={ input1 } onChange={e => { setInput1( e.target.value )}}/>

                <label htmlFor="operator">Choose an operator:</label>
                <select id="operator" value={ operator } onChange={e => { setOperator( e.target.value )}}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

                <label htmlFor="input2">Enter another number:</label>
                <input id="input2" type="number" value={input2} onChange={e => { setInput2( e.target.value )}}/>

                <input id="submitButton" className="light-button" type="submit" value="Calculate" onClick={ addEquation } />
            </form>

        </>
    )
}

export default CalculatorTwoInput;