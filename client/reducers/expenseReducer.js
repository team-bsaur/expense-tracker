import * as types from "../constants/actionTypes.js";

const initialState = {
  totalExpenses: 0,
  currentBalance: 10000,
  expenses: []
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return state;
    case types.GET_HISTORY:
      let total = 0;
      if (action.payload) {
        for (let i = 0; i < action.payload.length; i += 1) {
          total += 1;
        }
        return {
          ...state,
          expenses: action.payload,
          totalExpenses: total
        };
      }
    default:
      return state;
  }
};
export default expenseReducer;
