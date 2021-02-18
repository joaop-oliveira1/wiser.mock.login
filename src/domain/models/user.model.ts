import { Optional } from '../optional.domain';
import { Model } from './interface';

export interface UserObject {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  username: string;
  email: string;
  access_token: string;
}

export class User implements Model<UserObject> {
  private readonly _id: string;
  private readonly _username: string;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _avatar: string;
  private readonly _accessToken: string;
  private readonly _createdAt: string;

  constructor(args: UserObject) {
    this._id = args.id;
    this._username = args.username;
    this._name = args.name;
    this._email = args.email;
    this._avatar = args.avatar;
    this._accessToken = args.access_token;
    this._createdAt = args.createdAt;
  }

  public static fromJson(args: UserObject): User {
    return new User(args);
  }

  public static copyWith(user: User, args: Optional<UserObject>): User {
    return new User({
      ...user.toObject(),
      ...args,
    });
  }

  public toObject(): UserObject {
    return {
      id: this._id,
      createdAt: this._createdAt,
      name: this._name,
      avatar: this._avatar,
      username: this._username,
      email: this._email,
      access_token: this._accessToken,
    };
  }

  public toString(): string {
    return `User(${JSON.stringify(this.toObject(), null, 2)})`;
  }

  public get id(): string {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get avatar(): string {
    return this._avatar;
  }

  public get accessToken(): string {
    return this._accessToken;
  }

  public get createdAt(): string {
    return this._createdAt;
  }
}
