import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent for July',
        note: 'This was paid on 6th July',
        amount: 18750,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc09io', {
        note: 'Testing Edit Expense.'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc09io',
        updates: {
            note: 'Testing Edit Expense.'
        }
    });
});

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc09io');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc09io'
    });
});