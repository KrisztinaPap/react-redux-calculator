// General imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/themes.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Component imports
import Title from './components/Title';
import CalculatorOneInput from './components/CalculatorOneInput';
import CalculatorTwoInput from './components/CalculatorTwoInput';
import History from './components/History';
import Nav from './components/Nav';
import Home from './components/Home';

// Redux store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import historyReducer from './reducers/historyReducer.js';
import equationReducer from './reducers/equationReducer.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  history: historyReducer,
  equation: equationReducer
})
const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


store.subscribe( () => console.log( store.getState() ) );
console.log("store", store.getState());

ReactDOM.render(
  <Provider store={ store }>
    <>
      <Title title="Krisztina's React Calculator" />
      <Router>
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/calculator-one-input">
          <CalculatorOneInput />
        </Route>
        <Route path="/calculator-two-input">
          <CalculatorTwoInput />
        </Route>
        <Route path="/history" component={History} />
      </Router>
    </>
  </Provider>,
  document.getElementById('root')
);
