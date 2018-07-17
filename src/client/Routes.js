import React from 'react';
import Home from './componenets/Home';
import UsersList from './componenets/UsersList';

export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/users',
        component:UsersList,
        exact:true
    }
];