import {UserDB} from '../schemas/user.schema';
import {User} from '../models/user.model';

export async function postUser(
    user: User
  ): Promise<Error | User> {
    if (!user || !user.firstName || !user.lastName || !user.phoneNumber || !user.password || !user.role) {
      return Error("The parameters given are not valid!");
    }

    try {
    const emailExists = await UserDB.findOne({ email: user.email });
    if (emailExists) {
      return Error("The user added to the database already exists!");
    }
    const phoneNumberExists = await UserDB.findOne({phoneNumber: user.phoneNumber})
    if(phoneNumberExists){
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
    paswords: user.password,
    role: user.role,
  });
  NewUser.save();
  return NewUser;
}