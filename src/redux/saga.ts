import { all } from 'redux-saga/effects';
import * as LoginSaga from './auth/auth.saga';

export default function* rootSaga() {
  yield all([
    // Login Sagas, section
    LoginSaga.loginAttempt()
  ]);
}
