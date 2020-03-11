import { combineReducers } from "redux";

// import all reducers here
import expenseReducer from "./expenseReducer";
import userReducer from "./userReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  expense: expenseReducer,
  user: userReducer
});

// make the combined reducers available for import
export default reducers;
