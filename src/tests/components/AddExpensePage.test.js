import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

test('should render AddExpensePage correctly', () => {
    const onSubmitSpy = jest.fn();
    const historySpy = {
        push: jest.fn()
    }
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    const onSubmitSpy = jest.fn();
    const historySpy = {
        push: jest.fn()
    }
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
    wrapper.find('ExpenseForm').prop('onAddExpense')(expenses[0]);
    expect(onSubmitSpy).toHaveBeenCalledWith(expenses[0]);
    expect(historySpy.push).toHaveBeenCalledWith('/');
});

describe('this is not working: _this.props.onSubmit is not a function', () => {
    let onSubmitSpy, historySpy, wrapper;
    beforeEach(() => {
        onSubmitSpy = jest.fn();
        historySpy = {
            push: jest.fn()
        }
        wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
    });

    test('should handle on submit', () => {
        wrapper.find('ExpenseForm').prop('onAddExpense')(expenses[0]);
        expect(onSubmitSpy).toHaveBeenCalledWith(expenses[0]);
        expect(historySpy.push).toHaveBeenCalledWith('/');
    });
});
