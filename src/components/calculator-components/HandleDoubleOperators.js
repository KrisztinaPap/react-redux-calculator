const handleDoubleOperators = ( userInput ) => {
    let simplifiedUserEquation = userInput;
    let simplifiedUserEquationNoDoublePlus = "";
    let simplifiedUserEquationNoDoubleMinus = "";
    let simplifiedUserEquationPlusMinus = "";
    let simplifiedUserEquationMinusPlus = "";

    // Take care of any double operators
    while (simplifiedUserEquation.includes("++"))
    {
        // Handle double '+' signs
        simplifiedUserEquationNoDoublePlus = simplifiedUserEquation.replace("++", "+");
        simplifiedUserEquation = simplifiedUserEquationNoDoublePlus;
    };   
    while (simplifiedUserEquation.includes("--"))
    {
        // Handle double '-' signs
        simplifiedUserEquationNoDoubleMinus = simplifiedUserEquation.replace("--", "+");
        simplifiedUserEquation = simplifiedUserEquationNoDoubleMinus;      
    };  
    while (simplifiedUserEquation.includes("+-"))
    {
        // Handle '+-' combo
        simplifiedUserEquationPlusMinus = simplifiedUserEquation.replace("+-", "-");
        simplifiedUserEquation = simplifiedUserEquationPlusMinus;
    };   
    while (simplifiedUserEquation.includes("-+"))
    {
        // Handle '-+' combo
        simplifiedUserEquationMinusPlus = simplifiedUserEquation.replace("-+", "-");
        simplifiedUserEquation = simplifiedUserEquationMinusPlus;
    };   

    return simplifiedUserEquation; 
}

export default handleDoubleOperators;