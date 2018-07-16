// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
// createStore to make redux store ,
// applyMiddleware
import thunk from 'redux-thunk';// to handle async actions creators .
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
