import React, { useState } from 'react';

const [ isDark, setTheme ] = useState(false);

const ChangeTheme = ( ) => {
    if (isDark === true ){
        setTheme(false);
        console.log("true");
    } else {
        console.log("false");
    }
    return (
        console.log("return");
    )
}

export default ChangeTheme;