import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

//implicit return
const mapDispatchToProps = dispatch => ({
  addIncome: income => dispatch(actions.addIncome(income))
});

class Income extends Component {
  constructor(props) {
    super(props);
    this.handleIncome = this.handleIncome.bind(this);
  }
  handleIncome(event) {
    event.preventDefault();
    const income = event.target[0].value;
    this.props.addIncome(income);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleIncome}>
          <label>Enter your income: </label>
          <input type="number" placeholder="amount" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Income);
