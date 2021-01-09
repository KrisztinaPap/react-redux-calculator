import React, { useState } from 'react';

const handleDoubleOperators = ( userInput ) => {
    let simplifiedUserEquation = userInput;
    let simplifiedUserEquationNoDoublePlus = "";
    let simplifiedUserEquationNoDoubleMinus = "";
    let simplifiedUserEquationPlusMinus = "";
    let simplifiedUserEquationMinusPlus = "";
    
    console.log(simplifiedUserEquation);

    // Take care of any double operators
    while (simplifiedUserEquation.includes("++" || "--" || "+-" || "-+"))
    {
        // Handle double '+' signs
        simplifiedUserEquationNoDoublePlus = simplifiedUserEquation.replace("++", "+");
        simplifiedUserEquation = simplifiedUserEquationNoDoublePlus;

        // Handle double '-' signs
        simplifiedUserEquationNoDoubleMinus = simplifiedUserEquation.replace("--", "+");
        simplifiedUserEquation = simplifiedUserEquationNoDoubleMinus;      
        
        // Handle '+-' combo
        simplifiedUserEquationPlusMinus = simplifiedUserEquation.replace("+-", "-");
        simplifiedUserEquation = simplifiedUserEquationPlusMinus;

        // Handle '-+' combo
        simplifiedUserEquationMinusPlus = simplifiedUserEquation.replace("-+", "-");
        simplifiedUserEquation = simplifiedUserEquationMinusPlus;
    };   

    console.log(simplifiedUserEquation);
    return simplifiedUserEquation;
    // Update userInput state to match temporary equation
    //setUserInput(simplifiedUserEquation);   
}

export default handleDoubleOperators;