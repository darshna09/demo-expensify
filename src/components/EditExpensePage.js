import React from 'react';

const EditExpensePage = (props) => {
    console.log('EditExpensePage: props ==>', props);
    return (
        <div>This is from Edit Expense Page for ID {props.match.params.id}.</div>
    );
};

export default EditExpensePage;
