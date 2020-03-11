import { combineReducers } from 'redux';

// import all reducers here
import expenseReducer from './expenseReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  expense: expenseReducer,
});

// make the combined reducers available for import
export default reducers;
