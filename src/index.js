import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { addToHistoryReducer } from './reducers/history';
import { Provider } from 'react-redux';


const store = createStore( addToHistoryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

store.subscribe( () => console.log( store.getState() ) );

ReactDOM.render(
  <Provider store={ store }>
    <>

    </>
  </Provider>,
  document.getElementById('root')
);
