/** Getting started with Redux. */

import { createStore } from 'redux';

// Action generator - returns the action object for INCREMENT
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

// Action generator - returns the action object for DECREMENT
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// Action generator - returns the action object for SET
const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

// Action generator - returns the action object for RESET
const resetCount = () => ({
    type: 'RESET'
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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
};

// Store - State container
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch Action INCREMENT - Increment count by 5.
store.dispatch(incrementCount({ incrementBy: 5}));

// Dispatch Action INCREMENT - Increment count by 1.
store.dispatch(incrementCount());

// Dispatch Action DECREMENT - Decrement count by 1.
store.dispatch(decrementCount());

// Dispatch Action DECREMENT - Decrement count by 1.
store.dispatch(decrementCount({ decrementBy: 2}));

// Dispatch Action RESET - Reset count to 0.
store.dispatch(resetCount());

// Dispatch Action SET - Reset count to 20.
store.dispatch(setCount( { count: 20 }));

unsubscribe();