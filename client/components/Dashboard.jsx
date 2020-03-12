import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import ExpenseItem from "./ExpenseItem.jsx";

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentBalance: state.user.currentBalance,
  expenses: state.expense.expenses
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: id => dispatch(actions.getUserInfo(id))
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.currentUser;
    this.props.getUserInfo(id);
  }

  render() {
    const expenseHistory = this.props.expenses.map(expense => {
      return (
        <ExpenseItem
          key={`expense${expense.id}`}
          id={expense.id}
          category={expense.category}
          amount={expense.amount}
          notes={expense.notes}
          date={expense.created_at}
        />
      );
    });
    return (
      <div>
        <h2>Current Balance: {this.props.currentBalance}</h2>
        <Link to="/addExpense">Expense</Link>
        <Link to="/income">Income</Link>
        <br />
        <label>History: </label>
        {expenseHistory}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
