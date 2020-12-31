import React from 'react';
import { useSelector } from 'react-redux';

function History () {

    const history = useSelector(state => state.historyReducer);
    let tempArray = {history};
    console.log("temp array", tempArray);

    return (
        <>
            <div id="displayBox2">
                <h2>Current Session Calculation History:</h2>
                <ul>
                 
                </ul>
            </div>
     
        </>
    )
}

export default History;