const addToHistory = historyContent => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: historyContent
    };
}
export { addToHistory };