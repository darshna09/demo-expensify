import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    } 

    setTextFilter = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    sortByFilter = (e) => {
        e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate();
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.setTextFilter}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.sortByFilter}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
