import { Router, Request, Response, NextFunction } from 'express';
import { reviewRestaurant } from '../models/reviewRestaurant.model';
import { reviewRestaurantDB } from '../schemas/reviewRestaurant.schema';
import * as reviewRestaurantService from '../services/reviewRestaurant.service';

const reviewRestaurantRouter = Router();

reviewRestaurantRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    let addedVariable: Error | reviewRestaurant;
    try {
      addedVariable = await reviewRestaurantService.postreviewRestaurant(body);
    } catch (ex) {
      return next(ex);
    }
    if (addedVariable instanceof Error) {
      return next(addedVariable);
    }

    res.send(addedVariable);
  }
);

//get reviewRestaurant
reviewRestaurantRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const query: any = req.body;
    let reviewRestaurantByName: Error | reviewRestaurant | undefined;
    try {
      reviewRestaurantByName =
        await reviewRestaurantService.getReviewRestaurant(query);
      res.json(reviewRestaurantByName);
    } catch (ex) {
      return next(ex);
    }
    if (reviewRestaurantByName instanceof Error) {
      return next(reviewRestaurantByName);
    }
  }
);
//get all reviewRestaurant
reviewRestaurantRouter.get(
  '/',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const AllreviewRestaurant = await reviewRestaurantDB.find();
      res.send(AllreviewRestaurant);
    } catch (ex) {
      return next(ex);
    }
  }
);
//update reviewRestaurant
reviewRestaurantRouter.put(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body);
    if (body.user) {
      try {
        const findreviewRestaurant = await reviewRestaurantDB.findByIdAndUpdate(
          { _id: req.body.id },
          {
            user: body.user,
            reviewDate: Date.now(),
            ratingStars: body.ratingStars,
            message: body.message,
          }
        );
        if (findreviewRestaurant == null)
          return next('Could not find reviewRestaurant!');
        console.log('updated');
        const reviewRestaurantById = await reviewRestaurantDB.findById(
          req.body.id
        );
        res.send(reviewRestaurantById);
      } catch (ex) {
        return next(ex);
      }
    } else {
      return next('No attributes found!');
    }
  }
);

//delete reviewRestaurant
reviewRestaurantRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await reviewRestaurantDB.findByIdAndDelete(req.params.id);
      res.send('Deleted reviewRestaurant');
    } catch (ex) {
      return next(ex);
    }
  }
);

export { reviewRestaurantRouter };
