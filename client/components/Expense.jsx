import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapDispatchToProps = dispatch => ({
  addExpense: (category, amount, description, date) =>
    dispatch(actions.addExpense(category, amount, description, date))
});

class Expense extends Component {
  constructor(props) {
    super(props);
    this.handleExpense = this.handleExpense.bind(this);
  }
  handleExpense(event) {
    event.preventDefault();
    const category = event.target[0].value;
    const amount = event.target[1].value;
    const description = event.target[2].value;
    const date = event.target[3].value;
    this.props.addExpense(category, amount, description, date);
    console.log(category, amount, description, date);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleExpense}>
          <label>Category: </label>
          <select id="category">
            <option>Clothes</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Fuel</option>
            <option>Gifts</option>
            <option>Kids</option>
            <option>Eating Out</option>
            <option>Sports</option>
            <option>Holidays</option>
          </select>
          <br />
          <label>Amount: </label>
          <input type="number" placeholder="amount" />
          <br />
          <label>Description: </label>
          <textarea rows="2" cols="20" placeholder="note" />
          <br />
          <label>Date: </label>
          <input type="date" />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Expense);
