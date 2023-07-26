export class User {
    _id!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    password!: string;
    role!: string;
    email!: string;
  
    public constructor(init?: Partial<User>) {
      Object.assign(this, init);
    }
  }