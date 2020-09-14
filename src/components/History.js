import React from 'react';
import { connect } from 'react-redux';

function History ( props ) {

    return (
        <>
            <h2>Current Session Calculation History:</h2>
            <ul>
                { props.newHistoryList.map( equation => <li key={equation.id}>{equation.equation} </li>) }
            </ul>
        </>
    )
}

export default connect( state => ( { newHistoryList: state }))( History );