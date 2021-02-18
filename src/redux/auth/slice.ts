import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginDto } from '../../domain/dto/login.dto';
import { UserObject } from '../../domain/models/user.model';

export type AuthInitialState = {
  user?: UserObject;
};

const initialState: AuthInitialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSagaAttempt(state, action: PayloadAction<LoginDto>) {},
    loadAuthedUser(state, action: PayloadAction<UserObject>) {
      state.user = action.payload;
    },
  },
});

const { loginSagaAttempt, loadAuthedUser } = authSlice.actions;

export { loginSagaAttempt, loadAuthedUser };
export default authSlice;
