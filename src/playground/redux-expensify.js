"use strict";

import { createStore, combineReducers } from 'redux';
import { v1 as uuidv1 } from 'uuid';

// Expense Reducer
const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);     // state.filter(({ id }) => id !== action.id); 
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT​':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE​​':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE​':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
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

// Start date, end date  - timestamp (milliseconds)
// Starts from Jnuary 1st 1970 from midnight (UNIX EPOCH)
// Positive milliseconds are after the above time while the ones in negative are before this time.

// Get visible expenses - filtered/sorted
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Get the state
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    // console.log(store.getState());
});

// Action Generator: ADD_EXPENSE
const addExpense = ({
    description = '', note = '', amount = 0, createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv1(),
        description,
        note,
        amount,
        createdAt
    }
});

// Action Generator: REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Action Generator: EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Action Generator: SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Action Generator: SORT_BY_AMOUNT​
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT​'
});

// Action Generator: SORT_BY_DATE​
const sortByDate = () => ({
    type: 'SORT_BY_DATE​​'
});

// Action Generator: SET_START_DATE​
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE​',
    startDate
});

// Action Generator: SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseOne = store.dispatch(addExpense({description: 'Januaryrent', amount: 18795, createdAt: 10000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 20, createdAt: -10000}));

// Commented below for working on filters (visible expenses array) for less number of logs. 

// store.dispatch((removeExpense(expenseOne.expense.id)));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 50 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(12330));

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
