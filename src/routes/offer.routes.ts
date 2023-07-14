import { Router, Request, Response, NextFunction } from "express";
import { Offer } from "../models/offer.model";
import * as offerService from "../services/offer.service";

//create inventory item
const inventoryOfferRouter = Router();

inventoryOfferRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let randomVariable: Error | Offer;
    console.log(body);

    try {
      randomVariable = await offerService.postOffer(body);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//get inventory item
inventoryOfferRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | Offer | null;
    try {
      randomVariable = await offerService.getOfferById(req.params.id);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//get all inventory items
inventoryOfferRouter.get(
  "/",
  async (_req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | Offer[] | null;
    try {
      randomVariable = await offerService.getAllOffers();
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//update inventory item
inventoryOfferRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let randomVariable: Error | Offer | string | null;
    try {
      randomVariable = await offerService.updateOffer(req.params.id, body);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

//delete inventory item
inventoryOfferRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    let randomVariable: Error | string | null;
    try {
      randomVariable = await offerService.deleteOffer(req.params.id);
    } catch (ex) {
      return next(ex);
    }
    if (randomVariable instanceof Error) {
      return next(randomVariable);
    }

    res.send(randomVariable);
  }
);

export { inventoryOfferRouter };
