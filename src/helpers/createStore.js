import {createStore, applyMiddleware} from 'redux';
// createStore to make redux store ,
// applyMiddleware
import thunk from 'redux-thunk';// to handle async actions creators .
import reducers from '../client/reducers'
import axios from 'axios';

export default (req) => {

    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {cookie: req.get('cookie') || ''}
    });

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
};