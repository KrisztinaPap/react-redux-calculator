import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/themes.css';
import Title from './components/Title';
import Calculator from './components/Calculator';
import CalculatorOneInput from './components/CalculatorOneInput';
import History from './components/History';
import Theme from './components/Theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';


const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

store.subscribe( () => console.log( store.getState() ) );
console.log(store.getState());

ReactDOM.render(
  <Provider store={ store }>
    <>
      <Title title="Krisztina's React Calculator" />
      <Router>
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/calculator">
        <Theme />
          <Calculator />
          <CalculatorOneInput />
        </Route>
        <Route path="/history" component={History} />

      </Router>

    </>
  </Provider>,
  document.getElementById('root')
);
