import { Date, ObjectId } from "mongoose";

export class Order {
  _id!: ObjectId;
  user!: ObjectId; 
  address!: string;
  productList!: string;
  deliveryType!: deliveryType;
  totalPrice!: string;
  userNotes!: string;
  date!: Date;
  orderStatus!: orderStatus;

  public constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}

export enum deliveryType{
    PickUp = "pickUp",
    HomeDelivery = "homeDelivery",
}

export enum orderStatus{
  Pending = "pending",
  InProgress = "inProgress",
  Delivered = "delivered"
}