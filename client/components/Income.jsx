import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Redirect } from "react-router-dom";

//implicit return
const mapDispatchToProps = dispatch => ({
  addIncome: income => dispatch(actions.addIncome(income))
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

class Income extends Component {
  constructor(props) {
    super(props);
    this.handleIncome = this.handleIncome.bind(this);
    this.state = {
      didIncomeUpdate: false
    };
  }

  handleIncome(event) {
    event.preventDefault();
    const income = event.target[0].value;
    this.props.addIncome(income);
    this.setState({
      didIncomeUpdate: true
    });
  }

  render() {
    // console.log(this.state.didIncomeUpdate);
    if (this.state.didIncomeUpdate) {
      const { id } = this.props.currentUser;
      return <Redirect to={`/dashboard/${id}`} />;
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Income);
