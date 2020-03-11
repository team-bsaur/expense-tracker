/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();
    console.log('Hello from handleSignUp');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
