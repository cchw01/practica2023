import { Router, Request, Response, NextFunction } from 'express';
import { rezervation } from '../models/rezervation.model';
import { rezervationDB } from '../schemas/rezervation.schema';
import * as rezervationService from '../services/rezervation.service';

const rezervationRouter = Router();

rezervationRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let addedVariable: Error | rezervation;
    try {
      addedVariable = await rezervationService.postrezervation(body);
    } catch (ex) {
      return next(ex);
    }
    if (addedVariable instanceof Error) {
      return next(addedVariable);
    }

    res.send(addedVariable);
  }
);

rezervationRouter.get(
  '/:id',
  async function getReservation(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const userId: string = req.params.id;
    let rezervationData: Error | rezervation | null;

    try {
      rezervationData = await rezervationService.getReservationById(userId);
    } catch (ex) {
      return next(ex);
    }
    if (rezervationData instanceof Error) {
      return next(rezervationData);
    }

    if (rezervationData === null) {
      return res.status(404).end();
    }

    return res.json(rezervationData);
  }
);

//get all rezervation
rezervationRouter.get(
  '/',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const Allrezervation = await rezervationDB.find();
      res.send(Allrezervation);
    } catch (ex) {
      return next(ex);
    }
  }
);
//update rezervation
rezervationRouter.put(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body);
    if (body.user) {
      try {
        const findrezervation = await rezervationDB.findByIdAndUpdate(
          { _id: req.body.id },
          {
            table: body.table,
            reservationStart: body.reservationStart,
            reservationEnd: body.reservationEnd,
            userNotes: body.userNotes,
            status: body.status,
            numberOfPersons: body.numberOfPersons,
          }
        );
        if (findrezervation == null) return next('Could not find rezervation!');
        console.log('updated');
        const rezervationById = await rezervationDB.findById(req.body.id);
        res.send(rezervationById);
      } catch (ex) {
        return next(ex);
      }
    } else {
      return next('No attributes found!');
    }
  }
);

//delete rezervation
rezervationRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await rezervationDB.findByIdAndDelete(req.params.id);
      res.send('Deleted rezervation');
    } catch (ex) {
      return next(ex);
    }
  }
);

export { rezervationRouter };
