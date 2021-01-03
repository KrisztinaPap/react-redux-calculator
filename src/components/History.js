import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


function History() {
    const history = useSelector(state => state.history);

    return (
        <>
            <div className="display-box">
                <h2>Current Session Calculation History:</h2>
                <div>
                    { history.length > 0
                        ? history.map((equation, id) => <li key={equation.id}>{equation.equation}</li>) 
                        : <p>No history, yet!</p>
                    }
                    
                </div>
               
            </div>
     
        </>
    )
}

export default History;