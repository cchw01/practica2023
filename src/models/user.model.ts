import * as bcrypt from "bcrypt";

const saltRounds = 10; // bcrypt
const salt = bcrypt.genSaltSync(saltRounds); // bcrypt

export class User {
  private _id!: number;
  private _firstName!: string;
  private _lastName!: string;
  private _phoneNumber!: string;
  private _email!: string;
  private _password!: string;
  private _role!: string;

  constructor(user?: Partial<User>) {
    if (!user || !(user instanceof Object)) {
      user = <User>(<any>{});
    }

    this._id = user.id || 0;
    this._firstName = user.firstName || "";
    this._lastName = user.lastName || "";
    this._phoneNumber = user.phoneNumber || "";
    if (!user.email) this._email = "";
    else {
      if (!this.verifyEmailFormat(user.email))
        throw new Error("Invalid email format");
      this._email = user.email;
    }
    if (!user.password) this._password = "";
    else this._password = bcrypt.hashSync(user.password, salt);
    this._role = user.role || "";
  }

  public get id(): number {
    return this._id;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public get email(): string {
    return this._email;
  }
  public get password(): string {
    return this._password;
  }
  public get role(): string {
    return this._role;
  }

  public set setId(newid: number) {
    this._id = newid;
  }
  public set setFirstName(newFirstName: string) {
    this._firstName = newFirstName;
  }
  public set setLastName(newLastName: string) {
    this._lastName = newLastName;
  }
  public set setPhoneNumber(newPhoneNumber: string) {
    this._phoneNumber = newPhoneNumber;
  }
  public set setEmail(newEmail: string) {
    if (!this.verifyEmailFormat(newEmail))
      throw new Error("Invalid email format");
    this._email = newEmail;
  }
  public set setPassword(newPassword: string) {
    this._password = bcrypt.hashSync(newPassword, salt);
  }
  public set setRole(newRole: string) {
    this._role = newRole;
  }

  update(user: Partial<User>): void {
    if (!user || !(user instanceof Object)) {
      user = <User>(<any>{});
    }

    this._id = user.id || 0;
    this._firstName = user.firstName || "";
    this._lastName = user.lastName || "";
    this._phoneNumber = user.phoneNumber || "";
    if (!user.email) this._email = "";
    else {
      if (!this.verifyEmailFormat(user.email))
        throw new Error("Invalid email format");
      this._email = user.email;
    }
    if (!user.password) this._password = "";
    else this._password = bcrypt.hashSync(user.password, salt);
    this._role = user.role || "";
  }

  delete(): void {
    this._id = 0;
    this._firstName = "";
    this._lastName = "";
    this._phoneNumber = "";
    this._email = "";
    this._password = "";
    this._role = "";
  }

  private verifyEmailFormat(checkEmail: string): boolean {
    let emailRegex = new RegExp("^[a-z0-9._]+@[a-z0-9-]+.[a-z]{2,4}$");
    return emailRegex.test(checkEmail);
  }
}
