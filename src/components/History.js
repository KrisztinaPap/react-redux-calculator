import React from 'react';
import { useSelector } from 'react-redux';

function History ( props ) {

    const history = useSelector(state => state.historyReducer);
    let tempArray = {history};
    console.log(tempArray);

    return (
        <>
            <div id="displayBox2">
                <h2>Current Session Calculation History:</h2>
                <ul>
                    {/* { tempArray.map( equation => <li key={equation.id}>{equation.equation} </li>) } */}
                </ul>
            </div>
     
        </>
    )
}

export default History;