import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// implicit return
const mapDispatchToProps = dispatch => ({
  addExpense: () => dispatch(actions.addExpense()),
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addExpense();
  }

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <Link to="/signin">Sign In</Link>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);
