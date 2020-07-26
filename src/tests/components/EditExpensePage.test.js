import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let onEditExpense, onRemoveExpense, history, wrapper;

beforeEach(() => {
    onEditExpense = jest.fn();
    onRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            onEditExpense={onEditExpense}
            onRemoveExpense={onRemoveExpense}
            history={history}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onAddExpense')(expenses[1]);
    expect(onEditExpense).toHaveBeenCalledWith(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(onRemoveExpense).toHaveBeenCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenCalledWith('/');
});