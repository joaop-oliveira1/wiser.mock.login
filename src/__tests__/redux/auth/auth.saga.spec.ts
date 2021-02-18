import { loginAttempt, makeLoginRequest } from '../../../redux/auth/auth.saga';


describe('Testing auth saga definition', () => {
  it('should be defined', () => {
    expect(loginAttempt).toBeDefined();
    expect(makeLoginRequest).toBeDefined();
  });
});