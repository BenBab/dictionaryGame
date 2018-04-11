import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

import Selections from './components/Selections'
import Result from './components/Result';
import Toggle from './components/Toggle';

const store = createStore(
  rootReducer,
  composeWithDevTools()
  
);


const App = () => (
        <Provider store = {store}>
            <div className ="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to the Redux dictionary game</h1>
                </header>
                <p className="App-intro">
                    Select a start word and see how many steps it would take to reach the
                    end word by only changing one letter at a time.
                </p>
                <Selections/>
                <br />
                <Result/>
                <br/>
                <Toggle/>
            </div>
        </Provider>
        )
    

export default App;