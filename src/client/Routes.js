import React from 'react';
import {Route} from 'react-router-dom';
import Home from './componenets/Home';
import UsersList from './componenets/UsersList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={UsersList}/>
        </div>
    );
};