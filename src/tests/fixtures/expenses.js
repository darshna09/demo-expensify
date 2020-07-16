import moment from 'moment';

// Sample Expenses
export default [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 18750,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'Credit Card',
    note: '',
    amount: 32000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Investment',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];