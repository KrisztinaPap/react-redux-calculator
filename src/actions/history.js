const addToHistory = historyContent => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: historyContent
    };
}

const changeTheme = () => {
    return {
        type: 'TOGGLE_THEMES'
    };
}

export { addToHistory, changeTheme };