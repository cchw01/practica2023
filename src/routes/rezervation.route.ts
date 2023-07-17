import { Router, Request, Response, NextFunction } from "express";
import { rezervation } from "../models/rezervation.model";
import { rezervationDB } from "../schemas/rezervation.schema";
import * as rezervationService from "../services/rezervation.service";

const rezervationRouter = Router();

rezervationRouter.post(
  "/",
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

//get rezervation
rezervationRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const query: any = req.body;
    let rezervationByName: Error | rezervation | undefined;
    try {
      rezervationByName = await rezervationService.getrezervation(query);
      res.json(rezervationByName);
    } catch (ex) {
      return next(ex);
    }
    if (rezervationByName instanceof Error) {
      return next(rezervationByName);
    }
  }
);
//get all rezervation
rezervationRouter.get(
  "/",
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
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body);
    if (body.user) {
      try {
        const findrezervation = await rezervationDB.findByIdAndUpdate(
          { _id: req.body.id },
          {
            table: body.table,
            rezervationStrat: body.rezervationStrat,
            rezervationEnd: body.rezervationEnd,
            userNotes: body.userNotes,
            status: body.status,
            numberOfPersons: body.numberOfPersons,
          }
        );
        if (findrezervation == null) return next("Could not find rezervation!");
        console.log("updated");
        const rezervationById = await rezervationDB.findById(req.body.id);
        res.send(rezervationById);
      } catch (ex) {
        return next(ex);
      }
    } else {
      return next("No attributes found!");
    }
  }
);

//delete rezervation
rezervationRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await rezervationDB.findByIdAndDelete(req.params.id);
      res.send("Deleted rezervation");
    } catch (ex) {
      return next(ex);
    }
  }
);

export { rezervationRouter };
