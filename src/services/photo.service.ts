import { PhotoDb } from "../schemas/photo.schema";
import { Photo } from "../models/photo.model";
import { ObjectId } from "mongoose";

export { getPhoto, savePhoto /*, deletePhoto*/ };

async function getPhoto(id: ObjectId): Promise<Error | Photo | null> {
  try {
    const photo = await PhotoDb.findOne<Photo>({ id: id });
    return photo;
  } catch (ex: any) {
    return Error(ex.message);
  }
}

async function savePhoto(photo: Partial<Photo>): Promise<Error | Photo> {
  if (!photo || !(photo instanceof Object)) {
    return Error("photo is required");
  }

  const photoModel = new PhotoDb({
    photoLink: photo.photoLink,
    description: photo.description,
  });

  try {
    await photoModel.save();
  } catch (ex: any) {
    return Error(ex.message);
  }

  return photoModel;
}
