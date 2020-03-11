import * as types from "../constants/actionTypes.js";
//redux thunk
//actions => anything sending to reducer to dispatch actions
export const addExpense = (category, amount, description, date) => {
  return dispatch => {
    fetch("/addExpense", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ category, amount, description, date })
    })
      .then(response => response.json())
      .then(expense => {
        dispatch({
          //dispatch action -> to reducer
          type: types.ADD_EXPENSE,
          payload: expense
        });
      })
      .catch(err => console.log(err));
  };
};
//getState can access all reducers
export const addIncome = income => {
  return (dispatch, getState) => {
    const id = getState().user.currentUser.id;
    fetch("/updateIncome", {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      //income: income -> short hand ({income})
      body: JSON.stringify({ income, id })
    })
      .then(response => response.json())
      .then(income => {
        dispatch({
          //dispatch action -> to reducer
          type: types.ADD_INCOME,
          payload: income
        });
      })
      .catch(err => console.log(err));
  };
};

//dispatch data to reducer
export const userSignIn = (username, password) => {
  return dispatch =>
    fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(user => {
        dispatch({
          //dispatch action -> to reducer
          type: types.SIGN_IN,
          payload: user
        });
      })
      .catch(err => console.log(err));
};
