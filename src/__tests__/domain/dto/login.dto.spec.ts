import { defaultMaxListeners } from 'events';
import faker from 'faker';
import { LoginDto } from '../../../domain/dto/login.dto';

describe('Testing LoginDto class', () => {
  const initialValues = { username: faker.name.firstName(), password: faker.random.uuid() };
  let loginDto: LoginDto;
  beforeEach(() => {
    loginDto = new LoginDto(initialValues);
  });
  describe('Testing definition', () => {
    it('should be defined', () => {
      expect(LoginDto).toBeDefined();
    });
    it('should have all properties defined', () => {
      expect(loginDto.username).toBeDefined();
      expect(loginDto.password).toBeDefined();
      expect(loginDto.toObject).toBeDefined();
      expect(LoginDto.fromJson).toBeDefined();
      expect(LoginDto.copyWith).toBeDefined();
    });
  });
  describe('Testing implementations', () => {
    it('should return an instance of LogindDto through fromJson static method', () => {
      expect(LoginDto.fromJson(initialValues)).toBeInstanceOf(LoginDto);
    });
    it('should return a new instance of loginDto merged with the data of the old loginDto', () => {
      const mockData = { username: faker.internet.userName() };
      const newLoginDto = LoginDto.copyWith(loginDto, mockData);
      expect(newLoginDto.toObject()).toMatchObject({
        ...loginDto.toObject(),
        ...mockData,
      });
    });
    it('should return an login dto payload object through toObject', () => {
      expect(loginDto.toObject()).toMatchObject(initialValues);
    });
    it('should return the debug string through toString', () => {
      const stringMatcher = `LoginDto(${JSON.stringify(loginDto.toObject(), null, 2)})`;
      expect(loginDto.toString()).toBe(stringMatcher);
    });
  });
});
