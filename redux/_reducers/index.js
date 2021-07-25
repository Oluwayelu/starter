import { combineReducers } from 'redux';
import sample from './sampleReducer';
import errors from './errorsReducer';
import users from './usersReducer';

export default combineReducers({
  sample,
  errors,
  users,
});
