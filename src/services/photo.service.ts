import { PhotoDb } from "../schemas/photo.schema";
import { Photo } from "../models/photo.model";
import { ObjectId } from "mongoose";

export { getPhoto, savePhoto, getPhotos, deletePhoto, updatePhoto};

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

async function getPhotos(): Promise<Error | Photo[]> {
  try {
    const photos = await PhotoDb.find<Photo>({});
    return photos;
  } catch (ex: any) {
    return Error(ex.message);
  }
}

async function deletePhoto(id: ObjectId): Promise<Error | Photo | null> {

    try {
        const photo = await PhotoDb.findOneAndDelete<Photo>({ id: id });
        return photo;
    } catch (ex: any) {
        return Error(ex.message);
    }
}

async function updatePhoto(body:Photo): Promise<Error | Photo | null> {


    try {
        const photo =await PhotoDb.findByIdAndUpdate<Photo>({id:body.id},
            {
                photoLink:body.photoLink,
                description:body.description
            }
            );    
        return photo;
    }

    catch (ex: any) {
        return Error(ex.message);
    }

}
    

