import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call, put } from 'redux-saga/effects';
import { LoginDto } from '../../domain/dto/login.dto';
import { AuthenticationService } from '../../services/authentication.service';
import { loginSagaAttempt, loadAuthedUser } from './slice';


export function* makeLoginRequest(action: PayloadAction<LoginDto>) {
  const authService = AuthenticationService.instance();
  const user = yield call(() => authService.login(action.payload));
  yield put(loadAuthedUser(user.toObject()));
}

export function* loginAttempt() {
  yield takeEvery(loginSagaAttempt.type, makeLoginRequest);
}