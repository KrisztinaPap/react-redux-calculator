import React from 'react';
import { useSelector } from 'react-redux';


function History() {
    const history = useSelector(state => state.history);

    return (
        <>
            <h2>Current Session History</h2>
            <div className="display-box">
                <ol>
                    { history.length > 0
                        ? history.map((equation, id) => <li key={equation.id}> "{equation.equation}"</li>) 
                        : <p>No calculation session history to display, yet... Try one of the calculators!</p>
                    }  
                </ol>
            </div>
     
        </>
    )
}

export default History;