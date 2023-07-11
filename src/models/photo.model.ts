import { ObjectId } from "mongoose";

export class Photo {
  id: ObjectId;
  photoLink: string;
  description: string;

  public constructor(init?: Partial<Photo>) {
    Object.assign(this, init);
  }
}
