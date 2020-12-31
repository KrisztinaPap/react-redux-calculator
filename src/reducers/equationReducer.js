const equationReducer = ( state={}, action ) => {
    switch ( action.type ) {
        case 'SHOW_EQUATION':
            //const Equation = {
            //    id: uuidv4(),
            //    equation: action.payload
            //}
            //const newEquation = [...state];
            //newEquation.push( Equation );
            //return newEquation;
            return action.payload;
        default:
            return state;
    }
}
 
export default equationReducer;