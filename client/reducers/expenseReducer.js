import * as types from "../constants/actionTypes.js";

const initialState = {
  totalExpenses: 0,
  currentBalance: 10000,
  expense: []
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      console.log(state);
      return state;
    default:
      return state;
  }
};
export default expenseReducer;
