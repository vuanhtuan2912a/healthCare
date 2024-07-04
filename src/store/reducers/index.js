import { combineReducers } from 'redux';
import signInReducer from './authentication/signIn/index';
import signUpReducer from './authentication/signUp/index';

const rootReducer = combineReducers({
  signInReducer: signInReducer,
  signUpReducer: signUpReducer,
});

export default rootReducer;
