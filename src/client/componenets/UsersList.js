import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions";

class UserList extends Component {

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

// notic this component to be a ware only for
// some keys from the store .
function mapStateToProps(state) {
    return {users: state.users};
}


// connect this component to the global store object .
export default connect(mapStateToProps, {fetchUsers})(UserList);