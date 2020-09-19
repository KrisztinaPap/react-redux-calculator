const changeThemeReducer = ( state=true, action ) => {
    if ( action.type === 'CHANGE_THEME') {
        const isDark = action.payload;
        return isDark;
    } else {
        return state;
    }
    
}   

export default changeThemeReducer;