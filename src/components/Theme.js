import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../actions/history';



const Theme = ( props ) => {

    const [ isDark, setTheme ] = useState(true);

    const switchTheme = ( ) => {
            
        if ( isDark === true ) { 
            setTheme( false ); 
        } else { 
            setTheme( true );
        };
        props.dispatch( changeTheme ( isDark ));
    }

    return (
        <>
            <input id="switchThemeButton" type="submit" value="Switch themes" onClick={ switchTheme } />
        </>
    )
}

export default connect( 
    state => { return { root: state }}
    )( Theme );
