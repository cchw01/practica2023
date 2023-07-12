import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { User } from "../models/user.model";

const UserSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    collection: env.DB_NAME,
  }
);

const UserDB = model<User>("user", UserSchema);

export { UserDB };
