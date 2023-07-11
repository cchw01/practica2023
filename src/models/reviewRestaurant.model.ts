import { ObjectId } from 'mongoose';

export class reviewRestaurant {
  id!: ObjectId;
  user!: string;
  reviewDate: string;
  ratingStars: number;
  message: string;

  public constructor(init?: Partial<reviewRestaurant>) {
    Object.assign(this, init);
  }
}
