import { PhotoDb } from "../schemas/photo.schema";
import { Photo } from "../models/photo.model";

export { getPhoto, savePhoto, getPhotos, deletePhoto, updatePhoto};

async function getPhoto(_id: string): Promise<Error | Photo | null> {
 
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }

  try {
    const photo = await PhotoDb.findOne<Photo>({ _id:_id });
    return photo;
  }
    catch (ex: any) {
    return Error(ex.message);
  }
}

async function savePhoto(photo: Partial<Photo>): Promise<Error | Photo> {

  if (!photo || !(photo instanceof Object)) {
    return Error("photo is required");
  }

  if (!photo.photoLink || typeof photo.photoLink !== "string") {
    return Error("invalid photoLink");
  }

  if (!photo.description || typeof photo.description !== "string") {
    return Error("invalid description");
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

async function deletePhoto(_id: string): Promise<Error | Photo | null> {

  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const photo = await PhotoDb.findOneAndDelete({ _id: _id });
    return photo;
  } catch (ex: any) {
    return ex;
  }

}

async function updatePhoto(newPhoto:Partial<Photo>): Promise<Error | Photo | null> {

  
  if (!newPhoto || typeof newPhoto !== "object") {
    return Error("invalid params");
  }

  try {
    var updateResponse = await PhotoDb.findOneAndUpdate<Photo>(
      { _id: newPhoto._id },
      newPhoto
    );

    if (updateResponse == null) {
      return Error("Invalid");
    }
  } catch (ex: any) {
    return ex;
  }

  return null;
}
    

