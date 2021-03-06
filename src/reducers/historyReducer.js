import { v4 as uuidv4 } from 'uuid';

const historyReducer = ( state=[], action ) => {
    switch ( action.type ) {
        case 'ADD_TO_HISTORY':
            const newHistory = {
                id: uuidv4(),
                equation: action.payload
            }
            const newHistoryList = [...state];
            newHistoryList.push( newHistory );
            return newHistoryList;
        default:
            return state;
    }
}

 
 
export default historyReducer;