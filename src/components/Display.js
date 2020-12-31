import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Display = () => {

    let display = useSelector(state => state.historyReducer);

    return (
        <>
            <div id="displayBox">
                <h2>Your current equation:</h2>
                <p className="centerText">{display}</p>
            </div>
          {/*   <form id="form" className="light-box">
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
            </form> */}

        </>
    )
}

export default Display;