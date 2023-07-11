import { PhotoDb } from "../schemas/photo.schema";
import { Photo } from "../models/photo.model";

export {getPhoto, savePhoto/*, deletePhoto*/};

async function getPhoto(id: string): Promise<Error |  Photo | null> {
   if (!id || typeof id !== 'string') {
       return Error('id is required');
   }

   try{
    const photo = await PhotoDb.findById(id);
    return photo;
   }
   catch(ex: any){
       return Error(ex.message);
   }
}

async function savePhoto(photo: Partial<Photo>): Promise<Error | Photo> {

    if (!photo || !(photo instanceof Object)) {
        return Error('photo is required');
    }

    try{
        const aPhotoExists= await PhotoDb.findOne<Photo>({id:photo.id});
        if(aPhotoExists){
            return Error('photo already exists');
        }
    }
    catch(ex: any){
        return Error(ex.message);
    }

    const photoModel = new PhotoDb({
        id: photo.id,
        photoLink: photo.photoLink,
        description: photo.description
    });

    try{
        await photoModel.save();
    }
    catch(ex: any){
        return Error(ex.message);
    }

    return photoModel;
}
