import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    // When a store is created an @@redux/INIT action is dispatched by createStore
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const text = 'text filter';
    const state = filterReducers(undefined, { type: 'SET_TEXT_FILTER', text });
    expect(state.text).toBe(text);
});

test('should set sort by to amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT​' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducers(currentState, { type: 'SORT_BY_DATE​​' });
    expect(state.sortBy).toBe('date');
});

test('should set start date filter', () => {
    const startDate = moment(0);
    const state = filterReducers(undefined, { type: 'SET_START_DATE​', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment(0);
    const state = filterReducers(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});
