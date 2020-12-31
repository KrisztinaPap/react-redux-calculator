import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function History () {

    let history = useSelector(state => state.historyReducer);

    return (
        <>
            <div id="displayBox2">
                <h2>Current Session Calculation History:</h2>
                <div>
     
                </div>
               
            </div>
     
        </>
    )
}

export default History;