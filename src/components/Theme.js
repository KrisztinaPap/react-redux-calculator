import React, { useState } from 'react';
import { connect } from 'react-redux';



const Theme = ( props ) => {

    const [ isDark, setTheme ] = useState(true);

    const switchTheme = ( ) => {
            
        if ( isDark === true ) { 
            setTheme( false ); 
        } else { 
            setTheme( true );
        };
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
