import { combineReducers } from 'redux'
import count from './count.reducer';
import fetch from './fetch.reducer';
import user from './user.reducer';

export default combineReducers({
  count,
  fetch,
  user,
});
