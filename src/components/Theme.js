import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../actions/history';
import { changeThemeReducer } from '../reducers/history';


const Theme = ( props ) => {

    const [ isDark, setTheme ] = useState(true);
   
    const updateTheme = ( ) => {
        
        if ( isDark === true ) { 
            setTheme( false ); 
          
            document.getElementById("form").classList.remove("dark-box");
            document.getElementById("form").classList.add("light-box");

            document.getElementById("displayBox").classList.remove("dark-box");
            document.getElementById("displayBox").classList.add("light-box");

            document.getElementById("displayBox2").classList.remove("dark-box");
            document.getElementById("displayBox2").classList.add("light-box");

            document.getElementById("submitButton").classList.remove("dark-button");
            document.getElementById("submitButton").classList.add("light-button");

            
           
        } else { 
            setTheme( true );
            
            document.getElementById("form").classList.remove("light-box");
            document.getElementById("form").classList.add("dark-box");

            document.getElementById("displayBox").classList.remove("light-box");
            document.getElementById("displayBox").classList.add("dark-box");

            document.getElementById("displayBox2").classList.remove("light-box");
            document.getElementById("displayBox2").classList.add("dark-box");

            document.getElementById("submitButton").classList.remove("light-button");
            document.getElementById("submitButton").classList.add("dark-button");
        };
        props.dispatch(changeTheme( isDark ));
    }
    


    return (
        <>
            <input id="switchThemeButton" type="submit" value="Switch themes" onClick={updateTheme}/>
        </>
    )
}

export default connect( 
    state => { return { root: state }}
    )( Theme );
