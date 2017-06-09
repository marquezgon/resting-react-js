import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

const rootReducer = combineReducers({
  comments: (state = []) => state
});

export default rootReducer;
