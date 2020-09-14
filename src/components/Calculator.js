import React from 'react';

const Calculator = () => {
    return (
        <>
            <form>
                <label htmlFor="input1">Enter a number:</label>
                <input id="input1" type="number" />

                <label htmlFor="operator">Choose an operator:</label>
                <select id="operator">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

                <label htmlFor="input2">Enter another number:</label>
                <input id="input2" type="number" />

                <input type="submit" value="Calculate" />
            </form>
        </>
    )
}

export default Calculator;