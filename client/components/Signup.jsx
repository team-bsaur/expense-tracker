/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Redirect } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  userSignup: (username, password) =>
    dispatch(actions.userSignup(username, password))
});

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  currentUser: state.user.currentUser
});

class Signup extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }
  //connect function & mapStateToProps / mapDispatchToProps
  handleSignup(event) {
    event.preventDefault();
    const user = event.target[0].value;
    const password = event.target[1].value;
    this.props.userSignup(user, password);
  }

  render() {
    if (this.props.isLogged)
      return <Redirect to={`/dashboard/${this.props.currentUser.id}`} />;
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <input type="text" placeholder="user" />
          <input type="password" placeholder="password" />
          <button>Signup</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
