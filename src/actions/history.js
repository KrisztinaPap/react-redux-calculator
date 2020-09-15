const addToHistory = historyContent => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: historyContent
    };
}

const changeTheme = boolean => {
    return {
        type: 'CHANGE_THEME',
        payload: boolean
    };
}

export { addToHistory, changeTheme };