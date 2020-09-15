import { v4 as uuidv4 } from 'uuid';

const addToHistoryReducer = ( state=[], action ) => {
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

const changeThemeReducer = ( state=true, action ) => {
    if ( action.type === 'CHANGE_THEME') {
        const isDark = action.payload;
        return isDark;
    } else {
        return state;
    }
    
}    
 
export { addToHistoryReducer, changeThemeReducer };