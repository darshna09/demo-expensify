import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onAddExpense={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');                // It is not a full page refresh but something as the link was pressed
        }}/>
    </div>
);

export default connect()(AddExpensePage);
