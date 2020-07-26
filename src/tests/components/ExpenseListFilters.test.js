import React from 'react';
import { shallow } from 'enzyme';
import { filtersDefault, filters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

// setProps: https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setProps.html
test('should render ExpenseListFilters with new filter', () => {
    wrapper.setProps({
        filters: filters
    });
    expect(wrapper).toMatchSnapshot();
});

// Before Each doesn't work here.

test('should handle text change', () => {
    const setTextFilter = jest.fn();
    const sortByAmount = jest.fn();
    const sortByDate = jest.fn();
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by amount', () => {
    const setTextFilter = jest.fn();
    const sortByAmount = jest.fn();
    const sortByDate = jest.fn();
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by date', () => {
    const setTextFilter = jest.fn();
    const sortByAmount = jest.fn();
    const sortByDate = jest.fn();
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle date change', () => {
    const setTextFilter = jest.fn();
    const sortByAmount = jest.fn();
    const sortByDate = jest.fn();
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
    const startDate = '0';
    const endDate = '0';
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus change', () => {
    const setTextFilter = jest.fn();
    const sortByAmount = jest.fn();
    const sortByDate = jest.fn();
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filtersDefault}
        />
    );
    const focusedInput = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput)
    expect(wrapper.state('focusedInput')).toBe(focusedInput);
});