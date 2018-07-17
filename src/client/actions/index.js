/*The action creator layer is where we’ll perform all Ajax requests and other internal
logic to fetch or prepare data for the reducer
* */
export const initialState = {
    users: [],
    currentUser:null
};

export const FETCH_USERS = 'fetch_users';
// the dispatch method via props.
// The dispatch method allows us to execute an action creator, perform logic, and ultimately update the global state object.
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};



