import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0
                ? ( <p>No Expenses Added</p>)
                : (props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />)))
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);


// FOR UNDERSTANDING.

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         name: 'Ana'
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;
