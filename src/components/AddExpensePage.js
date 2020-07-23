import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');                // It is not a full page refresh but something as the link was pressed
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onAddExpense={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => (dispatch(addExpense(expense)))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// -------------------------------------------------------------------------------
// For writing tests we need to decouple the dispatch action, as done above.

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm onAddExpense={(expense) => {
//             props.dispatch(addExpense(expense));
//             props.history.push('/');                // It is not a full page refresh but something as the link was pressed
//         }}/>
//     </div>
// );

// export default connect()(AddExpensePage);
