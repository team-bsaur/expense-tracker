/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Login extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(event) {
    event.preventDefault();
    console.log('Hello from handleSignIn');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogIn}>
          <input type="text" placeholder="user" />
          <input type="text" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
