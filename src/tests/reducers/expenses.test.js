import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set initial state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '2' });
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not find', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '20' });
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '20',
            description: 'Testing New Expense',
            note: '',
            amount: 1000,
            createdAt: 200000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const amount = 16000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { 
            amount
        } 
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit if no expense found', () => {
    const amount = 16000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { 
            amount
        } 
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});