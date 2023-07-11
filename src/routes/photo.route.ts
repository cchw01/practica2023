import { Router, Request, Response, NextFunction } from "express";
import { Photo } from "../models/photo.model";
import * as photoService from "../services/photo.service";

export { setPhotoRouter };

function setPhotoRouter(router: Router): Router {
  router.get("/:id", getPhoto);
  router.get("/", getPhotos);
  router.post("/", postPhoto);
  router.delete("/:id", deletePhoto);
  router.put("/", updatePhoto);
  return router;
}

async function getPhoto(req: Request, res: Response, next: NextFunction) {
  const query: any = req.query.id;

  let photo: Photo | null | Error = null;

  try {
    photo = await photoService.getPhoto(query);
  } catch (ex: any) {
    return next(ex);
  }

  if (photo instanceof Error) {
    return next(photo);
  }

  console.log("getPhoto(), photo ", photo);
  return res.json(photo);
}

async function getPhotos(_req: Request, res: Response, next: NextFunction) {
  
    let photos: Photo[] | Error = [];
    
    try {
        photos = await photoService.getPhotos();
    } catch (ex: any) {
        return next(ex);
    }
    
    if (photos instanceof Error) {
        return next(photos);
    }
    
    console.log("getPhotos(), photos ", photos);
    return res.json(photos);

}

async function postPhoto(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;
  let photo: Error | Photo;

  try {
    photo = await photoService.savePhoto(body);
  } catch (ex) {
    return next(ex);
  }

  if (photo instanceof Error) {
    return next(photo);
  }
  console.log("postPhoto(), photo:", photo);
  return res.status(201).json(photo);
}

async function deletePhoto(req: Request, res: Response, next: NextFunction) {

    const query: any = req.query.id;

    let photo: Photo | null | Error = null;

    try {
        photo = await photoService.deletePhoto(query);
    }
    catch (ex: any) {
        return next(ex);
    }

    if (photo instanceof Error) {
        return next(photo);
      }
    
      console.log("deletePhoto(), photo ", photo);
      return res.json(photo);

}

async function updatePhoto(req: Request, res: Response, next: NextFunction) {

    const body: any = req.body;

    let photo: Photo= new Photo();

    try {
        photo.id=body.id;
        photo.photoLink=body.photoLink;
        photo.description=body.description;
        await photoService.updatePhoto(photo);
      } catch (ex: any) {
        return next(ex);
      }

      if (photo instanceof Error) {
        return next(photo);
      }
    
      console.log("updatePhoto(), photo ", photo);
      return res.json(photo);

}
