import { combineReducers } from 'redux';
import signInReducer from './authentication/signIn/index';
import signUpReducer from './authentication/signUp/index';
import appointment from './appointment';

const rootReducer = combineReducers({
  signInReducer: signInReducer,
  signUpReducer: signUpReducer,
  appointment: appointment,
});

export default rootReducer;
