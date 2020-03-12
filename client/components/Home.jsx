import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <Link to="/signup">Sign Up</Link>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    );
  }
}

export default Home;
