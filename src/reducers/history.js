const addToHistoryReducer = ( state=[], action ) => {
    switch ( action.type ) {
        case 'ADD_TO_HISTORY':
            const newHistory = {
                history: action.payload
            }
            const newHistoryList = [...state];
            newHistoryList.push( newHistory );
            return newHistoryList;
        default:
            return state;
    }
}
export { addToHistoryReducer};