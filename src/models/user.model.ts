export class User {
  ID!: number;
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;
  email!: string;
  password!: string;
  role!: string;

  constructor(user?: Partial<User>) {
    if (!user || !(user instanceof Object)) {
      user = <User>(<any>{});
    }

    this.ID = user.ID || 0;
    this.firstName = user.firstName || "";
    this.lastName = user.lastName || "";
    this.phoneNumber = user.phoneNumber || "";
    this.email = user.email || "";
    this.password = user.password || "";
    this.role = user.role || "";
  }

  // Getters
  get getID(): number {
    return this.ID;
  }
  get getFirstName(): string {
    return this.firstName;
  }
  get getLastName(): string {
    return this.lastName;
  }
  get getPhoneNumber(): string {
    return this.phoneNumber;
  }
  get getEmail(): string {
    return this.email;
  }
  get getPassword(): string {
    return this.password;
  }
  get getRole(): string {
    return this.role;
  }

  // setters
  set setID(newID: number) {
    this.ID = newID;
  }
  set setFirstName(newFirstName: string) {
    this.firstName = newFirstName;
  }
  set setLastName(newLastName: string) {
    this.lastName = newLastName;
  }
  set setPhoneNumber(newPhoneNumber: string) {
    this.phoneNumber = newPhoneNumber;
  }
  set setEmail(newEmail: string) {
    this.email = newEmail;
  }
  set setPassword(newPassword: string) {
    this.password = newPassword;
  }
  set setRole(newRole: string) {
    this.role = newRole;
  }
}
