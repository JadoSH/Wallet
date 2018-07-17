/*Inside of the questions reducer, we do what’s called “splitting the reducer.”
Remember the type value we returned from the action creator?
We’ll use a switch statement based on that value to update the state object appropriately
*/

import * as actionsFile from "../actions";


/*
* Once the reducer produces the new state object,
 * those smart components listening in become aware of the changes made and respond accordingly
 * */
export default (state = actionsFile.initialState.currentUser, actions) => {
    switch (actions.type) {
        case actionsFile.FETCH_CURRENT_USER:
            return actions.payload.data || false;
        default:
            return state;
    }
}

/*Note that the Object.assign function is a another feature of ES6.
 It returns a new object, based on the old state, but with updated fields as passed in by the third argument.
* return Object.assign({}, state, {
         key: value
      };
* */