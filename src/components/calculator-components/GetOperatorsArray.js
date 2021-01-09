const GetOperatorsArray = ( equationString ) => {
    let newOperatorArray = [];
    let operatorArray = equationString.split(/[0123456789]/);
    for (let i=0; i<operatorArray.length; i++) {
        if (operatorArray[i] !== "") {
            newOperatorArray.push(operatorArray[i]);
        }
    }       
    return newOperatorArray;
}

export default GetOperatorsArray;