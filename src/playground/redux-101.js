/** Getting started with Redux. */

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    };
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action INCREMENT - Increment count by 1.
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// Action DECREMENT - Decrement count by 1.
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 8
});

// Action RESET - Reset count to 0.
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});

unsubscribe();