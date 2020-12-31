import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/themes.css';
import Title from './components/Title';
//import Calculator from './components/CalculatorOneInput';
import CalculatorOneInput from './components/CalculatorTwoInput';
import CalculatorTwoInput from './components/CalculatorOneInput';
import History from './components/History';
import Display from './components/Display';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addToHistoryReducer from './reducers/history.js';


const store = createStore( addToHistoryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

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
        <Route path="/display" component={Display} />
        <Route path="/history" component={History} />
      </Router>
    </>
  </Provider>,
  document.getElementById('root')
);
