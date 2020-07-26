import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onEditExpense = (expense) => {
        this.props.onEditExpense(expense);
        this.props.history.push("/");
    }

    onRemoveExpense = () => {
        this.props.onRemoveExpense(this.props.expense.id);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <ExpenseForm
                expense={this.props.expense}
                onAddExpense={this.onEditExpense}
            />
            <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    onEditExpense: (expense) => dispatch(editExpense(expense.id, expense)),
    onRemoveExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
