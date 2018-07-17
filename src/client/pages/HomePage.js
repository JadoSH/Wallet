import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Home Cmp</div>
            <button id="btnjed" onClick={() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
};

export default {component: HomePage};