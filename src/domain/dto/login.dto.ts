import { Optional } from '../optional.domain';
import { DataTransferObject } from './interface';

export interface LoginPayloadObject {
  username: string;
  password: string;
}

export class LoginDto implements DataTransferObject<LoginPayloadObject> {
  private readonly _username: string;
  private readonly _password: string;

  constructor(args: LoginPayloadObject) {
    this._username = args.username;
    this._password = args.password;
  }

  public static copyWith(loginDto: LoginDto, args: Optional<LoginPayloadObject>): LoginDto {
    return LoginDto.fromJson({
      ...loginDto.toObject(),
      ...args,
    });
  }

  public static fromJson(args: LoginPayloadObject): LoginDto {
    return new LoginDto(args);
  }

  public toObject(): LoginPayloadObject {
    return {
      username: this._username,
      password: this._password,
    };
  }

  public toString(): string {
    return `LoginDto(${JSON.stringify(this.toObject(), null, 2)})`;
  }

  public get username(): string {
    return this._username;
  }

  public get password(): string {
    return this._password;
  }
}
