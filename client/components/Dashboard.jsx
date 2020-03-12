import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
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
    console.log(this.props.expenses);
    return (
      <div>
        <Link to="/addExpense">Expense</Link>
        <Link to="/updateIncome">Income</Link>
        <br />
        <label>History: </label>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
