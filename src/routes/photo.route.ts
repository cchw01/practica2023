import { Router, Request, Response, NextFunction } from 'express';
import {Photo} from '../models/photo.model';
import * as photoService from '../services/photo.service';


export {setPhotoRouter};

function setPhotoRouter(router: Router):Router {
    router.get('/photo/:id', getPhoto);
    //router.post('/photo', createPhoto);
    return router;
}

async function getPhoto(req: Request, res: Response, next: NextFunction) {

    const query: any = req.query.id;

    let photo: Photo | null | Error = null;

    try {
        photo = await photoService.getPhoto(query);
    }
    catch (ex: any) {
      return next(ex);
    }

    if (photo instanceof Error) {
        return next(photo);
    }

    console.log('getPhoto(), photo ', photo);
    return res.json(photo);
}