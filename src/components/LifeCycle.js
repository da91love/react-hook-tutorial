import { useEffect } from 'react';

function LifeCycle() {
    // It takes a function
    useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('render!');

        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return function test() {
            console.log('unmounting...');
        };
    });

    return "I'm a lifecycle demo";
}

export default LifeCycle;
