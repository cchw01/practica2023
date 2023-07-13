import { UserDB } from "../schemas/user.schema";
import { User } from "../models/user.model";
import * as bcrypt from "bcrypt";

const salt = 10;

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

  // Regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(user.email)) {
    return Error("Invalid email format!");
  }

  // Regex pattern for password validation (at least 8 characters and one number)
  const passwordRegex = /^(?=.*\d).{8,}$/;

  if (!passwordRegex.test(user.password)) {
    return Error(
      "Invalid password format! Password must be at least 8 characters long and contain at least one number."
    );
  }

  const hashPass: string = await bcrypt.hash(user.password, salt);
  const NewUser = new UserDB({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    password: hashPass,
    role: user.role,
  });
  await NewUser.save();
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

export async function getUsers(): Promise<Error | User[]> {
  try {
    const photos = await UserDB.find<User>({});
    return photos;
  } catch (ex: any) {
    return Error(ex.message);
  }
}

export async function deleteUser(_id: string) {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const user = await UserDB.findOneAndDelete({ _id: _id });
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

  if (newUser.email) {
    // Regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newUser.email)) {
      return Error("Invalid email format!");
    }
  }

  if (newUser.password) {
    // Regex pattern for password validation (at least 8 characters and one number)
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(newUser.password)) {
      return Error(
        "Invalid password format! Password must be at least 8 characters long and contain at least one number."
      );
    }
    newUser.password = await bcrypt.hash(newUser.password, salt);
  }

  try {
    var updateResponse = await UserDB.findOneAndUpdate<User>(
      { _id: newUser._id },
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
