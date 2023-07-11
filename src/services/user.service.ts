import { UserDB } from "../schemas/user.schema";
import { User } from "../models/user.model";

export async function postUser(user: User): Promise<Error | User> {
  if (
    !user ||
    !user.firstName ||
    !user.lastName ||
    !user.phoneNumber ||
    !user.password ||
    !user.role
  ) {
    return Error("The parameters given are not valid!");
  }

  try {
    const emailExists = await UserDB.findOne({ email: user.email });
    if (emailExists) {
      return Error("The user added to the database already exists!");
    }
    const phoneNumberExists = await UserDB.findOne({
      phoneNumber: user.phoneNumber,
    });
    if (phoneNumberExists) {
      return Error("The user number added to the database already exists!");
    }
  } catch (ex: any) {
    return ex;
  }

  const NewUser = new UserDB({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    password: user.password,
    role: user.role,
  });
  NewUser.save();
  console.log("save user check");
  return NewUser;
}

export async function getUser(_id: string): Promise<Error | User | null> {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const user = await UserDB.findOne<User>({ _id: _id });
    return user;
  } catch (ex: any) {
    return ex;
  }
}

export async function updateUser(
  newUser: Partial<User>
): Promise<Error | User | undefined> {
  if (!newUser || typeof newUser !== "object") {
    return Error("invalid params");
  }

  try {
    var updateResponse = await UserDB.findOneAndUpdate<User>(
      {
        _id: newUser,
      },
      newUser
    );

    if (updateResponse == null) {
      return Error("Invalid");
    }
  } catch (ex: any) {
    return ex;
  }

  return undefined;
}
