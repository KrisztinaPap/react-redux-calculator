import React from 'react';
import { connect } from 'react-redux';

function History ( props ) {

    console.log("props", props);
    return (
        <>
            <div className="displayBox">
                <h2>Current Session Calculation History:</h2>
                <ul>
                    { props.root.addToHistoryReducer.map( equation => <li key={equation.id}>{equation.equation} </li>) }
                </ul>
            </div>
     
        </>
    )
}

export default connect( state => ( { root: state }))( History );