import mongoose from "mongoose";
const { model, Schema } = mongoose;

import { env } from "../env";
import { Order, deliveryType } from "../models/order.model";
import { User } from "../models/user.model";



const OrderSchema = new Schema<Order>(
  {
    user: { type: User, required: true },
    address: { type: String, required: true },
    productList: { type: String, required: true },
    deliveryType: { type: String, enum: Object.values(deliveryType), required: true },
    totalPrice: { type: String, required: true },
    userNotes: { type: String, required: true },
    date: { type: Date, required: true },
    orderStatus: { type: Boolean, required: true },

  },
  {
    collection: env.DB_NAME,
  }
);

const UserDB = model<Order>("user", OrderSchema);

export { UserDB };
