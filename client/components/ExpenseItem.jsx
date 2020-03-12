import React, { Component } from "react";

class ExpenseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <strong>{this.props.category}</strong>
        <p>Amount: {this.props.amount}</p>
        <p>Notes: {this.props.notes}</p>
        <p>Date: {this.props.date}</p>
        <button onClick={() => this.deleteExpense(this.props.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ExpenseItem;
