import addToHistoryReducer from './history';
import changeThemeReducer from './theme';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    historyReducer: addToHistoryReducer,
    themeReducer: changeThemeReducer
});

export default rootReducer;