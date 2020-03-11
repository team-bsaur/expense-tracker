import React, { Component } from 'react';

class Expense extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>Category: </label>
          <select id="category">
            <option>Clothes</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Fuel</option>
            <option>Gifts</option>
            <option>Kids</option>
            <option>Eating Out</option>
            <option>Sports</option>
            <option>Holidays</option>
          </select>
          <br />
          <label>Amount: </label>
          <input type="text" placeholder="amount" />
          <br />
          <label>Description: </label>
          <textarea rows="2" cols="20" placeholder="note" />
          <br />
          <label>Date: </label>
          <input type="date" />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default Expense;
