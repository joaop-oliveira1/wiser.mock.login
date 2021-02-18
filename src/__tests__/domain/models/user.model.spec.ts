import faker from 'faker';
import { User } from '../../../domain/models/user.model';

describe('Testing User domain model', () => {
  const initialValues = {
    id: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    access_token: faker.random.uuid(),
    createdAt: faker.date.recent().toString(),
  };
  let user: User;
  beforeEach(() => {
    user = new User(initialValues);
  });
  describe('Testing definition', () => {
    it('should be defined', () => {
      expect(User).toBeDefined();
    });
    it('should have all attributes defined', () => {
      expect(user.id).toBeDefined();
      expect(user.username).toBeDefined();
      expect(user.name).toBeDefined();
      expect(user.email).toBeDefined();
      expect(user.avatar).toBeDefined();
      expect(user.accessToken).toBeDefined();
      expect(user.createdAt).toBeDefined();
      expect(user.toString).toBeDefined();
      expect(user.toObject).toBeDefined();
      expect(User.copyWith).toBeDefined();
      expect(User.fromJson).toBeDefined();
    });
  });
  describe('Testing methods', () => {
    it('should return an object through toObject', () => {
      expect(user.toObject()).toMatchObject(initialValues);
    });
    it('should return the debug string through toString', () => {
      const stringMatcher = `User(${JSON.stringify(user.toObject(), null, 2)})`;
      expect(user.toString().trim()).toBe(stringMatcher.trim());
    });
    it('should return a new instance of user merged with the data of the old user', () => {
      const mockData = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
      };
      const newUser = User.copyWith(user, mockData);
      expect(newUser.toObject()).toMatchObject({
        ...user.toObject(),
        ...mockData,
      });
    });
    it('should return a brand new instance of User', () => {
      expect(User.fromJson(initialValues)).toBeInstanceOf(User);
    });
  });
});
