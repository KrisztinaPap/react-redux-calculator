import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { addToHistoryReducer, changeThemeReducer } from './reducers/history';
import { Provider } from 'react-redux';
import Title from './components/Title';
import Calculator from './components/Calculator';
import History from './components/History';
import { addToHistory } from './actions/history';


const rootReducer = combineReducers({
  addToHistoryReducer,
  changeThemeReducer
})

const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

store.subscribe( () => console.log( store.getState() ) );
console.log(store.getState());

ReactDOM.render(
  <Provider store={ store }>
    <>
      <Title title="Krisztina's React Calculator" />
      <Calculator />
      <History />
    </>
  </Provider>,
  document.getElementById('root')
);
