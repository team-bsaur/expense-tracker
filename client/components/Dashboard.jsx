import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Expense</button>
        <button>Income</button>
        <br />
        <label>History: </label>
        <ul />
      </div>
    );
  }
}
export default Dashboard;
