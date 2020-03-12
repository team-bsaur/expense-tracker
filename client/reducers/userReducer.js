import * as types from "../constants/actionTypes.js";

const initialState = {
  currentUser: null,
  isLogged: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      if (action.payload) {
        console.log(action.payload);
        return {
          ...state,
          currentUser: action.payload,
          isLogged: true
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
