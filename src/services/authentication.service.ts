import { AxiosDatasource } from '../datasource/axios.datasource';
import { LoginDto } from '../domain/dto/login.dto';
import { User, UserObject } from '../domain/models/user.model';

export class AuthenticationService {
  public readonly datasource = AxiosDatasource.instance();

  private constructor() {}

  private static _instance: AuthenticationService = new AuthenticationService();
  public static instance(): AuthenticationService {
    return this._instance;
  }

  public async login(body: LoginDto): Promise<User> {
    const response = await this.datasource.post<UserObject>('auth', body.toObject());
    return User.fromJson(response.data);
  }
}
