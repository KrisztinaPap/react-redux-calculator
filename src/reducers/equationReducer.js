import { v4 as uuidv4 } from 'uuid';

const equationReducer = ( state=[], action ) => {
    switch ( action.type ) {
        case 'SHOW_EQUATION':
            const Equation = {
                id: uuidv4(),
                equation: action.payload
            }
            const newEquation = [...state];
            newEquation.push( Equation );
            return newEquation;
        default:
            return state;
    }
}

 
 
export default equationReducer;