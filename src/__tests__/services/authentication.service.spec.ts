import axios from 'axios';
import faker from 'faker';
import { LoginDto } from '../../domain/dto/login.dto';
import { User } from '../../domain/models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

describe('Testing AuthenticationService class', () => {
  const mockAuthResponse = {
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    data: {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      access_token: faker.random.uuid(),
      createdAt: faker.date.recent().toString(),
    },
  };
  let service: AuthenticationService;
  beforeEach(() => {
    service = AuthenticationService.instance();
  });
  describe('Testing definition', () => {
    it('should be defined', () => {
      expect(AuthenticationService).toBeDefined();
      expect(service).toBeDefined();
      expect(AuthenticationService.instance).toBeDefined();
      expect(service.login).toBeDefined();
    });
  });
  describe('Testing implementation', () => {
    it('should return a single instance of AuthenticationService', () => {
      expect(AuthenticationService.instance()).toBeInstanceOf(AuthenticationService);
    });
    it('should send a request to perform an login in the application', async () => {
      const spy = jest.spyOn(service.datasource, 'post').mockResolvedValueOnce(mockAuthResponse);
      const mockLoginDto = LoginDto.fromJson({ username: faker.internet.userName(), password: faker.random.uuid() });
      const user: User = await service.login(mockLoginDto);
      expect(user).toBeInstanceOf(User);
      expect(user.toObject()).toEqual(mockAuthResponse.data);
      expect(spy).toHaveBeenCalledWith('auth', mockLoginDto.toObject());
    });
  });
});
