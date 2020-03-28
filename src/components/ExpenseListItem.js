import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <h2><Link to={`/edit/${id}`}>{description}</Link></h2>
        <p>Amount: {amount}</p>
        <p>Created at: {moment(createdAt).format('YYYY-MM-DD')}</p>
        
    </div>
);

export default ExpenseListItem;