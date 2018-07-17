/*The reducer builds the final state object
The reducer’s responsibility is to take the application state, account for changes coming from the action creators,
and boil it all down (‘reduce’ it) to the new state
*/

import {combineReducers} from 'redux';
import userReducer from './usersReducer';
import authReducer from './authReducer';

//Each domain reducer is combined using the combineReducers method.
export default combineReducers({
    users: userReducer,
    auth: authReducer
});