import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { addToHistoryReducer } from './reducers/history';
import { Provider } from 'react-redux';
import Title from './components/Title';
import Calculator from './components/Calculator';
import History from './components/History';


const store = createStore( addToHistoryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

store.subscribe( () => console.log( store.getState() ) );

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
