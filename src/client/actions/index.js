/*The action creator layer is where we’ll perform all Ajax requests and other internal
logic to fetch or prepare data for the reducer
* */

import axios from 'axios';


export const FETCH_USERS = 'fetch_usres';

export const initialState = {
    users: []
};


// the dispatch method via props.
// The dispatch method allows us to execute an action creator, perform logic, and ultimately update the global state object.
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

    dispatch({
        type:FETCH_USERS,
        payload:res
    });
};


