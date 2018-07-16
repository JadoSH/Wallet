import {createStore, applyMiddleware} from 'redux';
// createStore to make redux store ,
// applyMiddleware
import thunk from 'redux-thunk';// to handle async actions creators .
import reducers from '../client/reducers'

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
};