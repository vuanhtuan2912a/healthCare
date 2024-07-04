import { all } from 'redux-saga/effects';
import signInSaga from './authentication/signIn';

export default function* rootSaga() {
  yield all([signInSaga]);
}
