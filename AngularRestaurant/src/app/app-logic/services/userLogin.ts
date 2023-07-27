export class UserLogin {
  password!: string;
  email!: string;

  public constructor(init?: Partial<UserLogin>) {
    Object.assign(this, init);
  }
}
