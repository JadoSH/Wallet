import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions/index";

class UserListPage extends Component {

    // the mount methods does not invoked when we use ssr .
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        // lat point in the circle
        // the new data comes from fetchUsers is available via this.props.users
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }

}

// notice this component to be a ware only for
// some keys from the store .
function mapStateToProps(state) {
    return {users: state.users};
}

/*
* load component data
* */
function loadData(store) {
    // we cannot use   connect(mapStateToProps in this approach cause
    // we did not yet rendered our application
    // works with redux manually
    return store.dispatch(fetchUsers());
}

// connect this component to the global store object .
export default {
    loadData: loadData,
    component: connect(mapStateToProps, {fetchUsers})(UserListPage)
};