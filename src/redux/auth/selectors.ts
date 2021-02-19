import { createSelector } from '@reduxjs/toolkit'
import { UserObject } from '../../domain/models/user.model';

interface AuthState {
  user: UserObject
}

interface RootState {
  auth: AuthState;
}

export const selectUser = createSelector<RootState, AuthState, UserObject>(
  state => state.auth,
  auth => auth.user
)