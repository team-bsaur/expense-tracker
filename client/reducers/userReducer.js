import * as types from "../constants/actionTypes.js";

const initialState = {
  currentUser: null,
  isLogged: false,
  income: 0,
  currentBalance: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      if (action.payload) {
        const currentBalance = action.payload.income / 12;
        console.log("current", currentBalance);
        return {
          ...state,
          currentUser: action.payload,
          isLogged: true,
          income: action.payload.income,
          currentBalance
        };
      }
      return state;
    case types.SIGN_UP:
      if (action.payload) {
        const currentBalance = action.payload.income / 12;
        return {
          ...state,
          currentUser: action.payload,
          isLogged: true,
          income: action.payload.income,
          currentBalance
        };
      }
      return state;
    case types.ADD_INCOME:
      return state;
    default:
      return state;
  }
};
export default userReducer;
