import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This is from the Expensify Dashboard Page.</div>
);

const AddExpensePage = () => (
    <div>This is from Add Expense Page.</div>
);

const EditExpensePage = () => (
    <div>This is from Edit Expense Page.</div>
);

const HelpPage = () => (
    <div>This is from Help Page.</div>
);

const NotFoundPage = () => (
    <div>404! Page Not Found.</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);
