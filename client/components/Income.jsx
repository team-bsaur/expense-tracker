import React, { Component } from 'react';

class Income extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter your income: </label>
          <input type="text" placeholder="amount" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default Income;
