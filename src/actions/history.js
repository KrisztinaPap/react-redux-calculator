const addToHistory = historyContent => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: historyContent
    };
}

const changeTheme = () => {
    return {
        type: 'TOGGLE_THEMES',
        dark: false
    };
}

export { addToHistory, changeTheme };