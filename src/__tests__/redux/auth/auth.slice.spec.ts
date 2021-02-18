import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../../../redux/auth/slice';
import faker from 'faker';

describe('Testing authSlice', () => {
  let store;
  const mockUserObject = {
    id: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    access_token: faker.random.uuid(),
    createdAt: faker.date.recent().toString(),
  };
  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authSlice.reducer
      }
    });
  });
  it('should be defined', () => {
    expect(authSlice).toBeDefined();
  })
  it('should load user into the store after loadAuthedUser action is disptahced', () => {
    store.dispatch(authSlice.actions.loadAuthedUser(mockUserObject));
    const userState = store.getState().auth.user;
    expect(userState).toMatchObject(mockUserObject)
  })
});
