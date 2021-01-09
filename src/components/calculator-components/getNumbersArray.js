const GetNumbersArray = ( equationString ) => {
    return equationString.split( /[*+/-]/gi );
}

export default GetNumbersArray;