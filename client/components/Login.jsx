/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapDispatchToProps = dispatch => ({
  userSignIn: (username, password) =>
    dispatch(actions.userSignIn(username, password))
});

class Login extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
  }
  //connect function & mapStateToProps / mapDispatchToProps
  handleLogIn(event) {
    event.preventDefault();
    const user = event.target[0].value;
    const password = event.target[1].value;
    this.props.userSignIn(user, password);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogIn}>
          <input type="text" placeholder="user" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
