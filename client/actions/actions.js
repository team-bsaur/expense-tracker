import * as types from "../constants/actionTypes.js";
//redux thunk
//actions => anything sending to reducer to dispatch actions
export const addExpense = (category, amount, notes, userid) => {
  return dispatch => {
    fetch("/expense/addExpense", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ category, amount, notes, userid })
    })
      .then(() => {
        dispatch({
          //dispatch action -> to reducer
          type: types.ADD_EXPENSE
        });
      })
      .catch(err => console.log(err));
  };
};
//getState can access all reducers
export const addIncome = income => {
  return (dispatch, getState) => {
    const id = getState().user.currentUser.id;
    console.log(id);
    fetch("/auth/updateIncome", {
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
export const userSignIn = (userName, password) => {
  return dispatch =>
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ userName, password })
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

export const userSignup = (userName, password) => {
  return dispatch =>
    fetch("/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ userName, password })
    })
      .then(response => response.json())
      .then(user => {
        console.log("user", user);
        dispatch({
          //dispatch action -> to reducer
          type: types.SIGN_UP,
          payload: user
        });
      })
      .catch(err => console.log(err));
};

export const getUserInfo = id => {
  return dispatch => {
    fetch(`/expense/getExpenses/${id}`)
      .then(res => res.json())
      .then(history => {
        dispatch({
          type: types.GET_HISTORY,
          payload: history
        });
      });
  };
};
