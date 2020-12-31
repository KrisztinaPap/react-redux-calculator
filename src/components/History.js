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
                <div>
                { (tempArray === undefined)
                ? 
                    <ul>
                       <li>Stuff</li>
                    </ul> 
                :
                <p>There is no history, yet!</p>
                }
                </div>
               
            </div>
     
        </>
    )
}

export default History;