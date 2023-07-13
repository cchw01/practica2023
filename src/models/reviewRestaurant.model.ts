import { ObjectId } from 'mongoose';
import { User } from './user.model';

export class reviewRestaurant {
  id!: ObjectId;
  user!: User;
  reviewDate: Date;
  ratingStars: number;
  message: string;

  public constructor(init?: Partial<reviewRestaurant>) {
    Object.assign(this, init);
  }
}
