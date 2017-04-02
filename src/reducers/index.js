import { combineReducers } from 'redux'
import countReducer from './count.reducer';
import fetchReducer from './fetch.reducer'

export default combineReducers({
  countReducer,
  fetchReducer
});
