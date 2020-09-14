import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToHistory } from '../actions/history';


const Calculator = ( props ) => {

    const [ input1, setInput1 ] = useState(0);
    const [ operator, setOperator ] = useState( "+" );
    const [ input2, setInput2 ] = useState(0);
    const [ result, setResult ] = useState(0);
    const [ historyList, setHistory ] = useState([]);

    const addEquation = ( event ) => {
        let tempHistory = [...historyList];
        let newHistory = `${input1}${operator}${input2}=${result}`;
        tempHistory.push( newHistory);
        setHistory( tempHistory );
        props.dispatch( addToHistory( newHistory ));
        return historyList;
    }

    const calculateResult = ( event ) => {
        event.preventDefault();
        addEquation();
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
    }

    return (
        <>
            <form onSubmit={ calculateResult }>
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

                <input type="submit" value="Calculate" />
            </form>
            <h2>Your current equation:</h2>
            <p>{input1}{operator}{input2}={result}</p>
        </>
    )
}

export default connect(
    state => { return { historyList: state }}
)( Calculator );