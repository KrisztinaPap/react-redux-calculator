const addToHistory = historyContent => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: historyContent
    };
}

const changeTheme = ( ) => {
    return {
        type: 'CHANGE_THEME',
        isDark: false
    };
}

export { addToHistory, changeTheme };