import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created at: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense(id));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);