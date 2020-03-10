import { createStore, combineReducers } from 'redux';

// Expense Reducer
const expensesReducer = (state = [], action) => {
    switch(action.type) {
        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: null
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// Get the state
console.log(store.getState());

// Example for expensify state
const demoState = {
    expenses: [{
        id: '23454545',
        description: 'January Rent',
        note: 'Rent increased by 5.9%.',
        amount: 18735,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: null,
        endDate: null
    }
};
