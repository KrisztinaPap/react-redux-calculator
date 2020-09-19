import React from 'react';
import { useSelector } from 'react-redux';

function History ( props ) {

    const history = useSelector(state => state.historyReducer);
    const currentHistory = history.map( equation => <li>{equation.equation}</li>);

    return (
        <>
            <div id="displayBox2">
                <h2>Current Session Calculation History:</h2>
                <ul>   
                    { currentHistory }                  
                  
                </ul>
            </div>
     
        </>
    )
}

export default History;