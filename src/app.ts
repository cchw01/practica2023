import * as express from "express";
import { env } from "./env";
import { IExpressError } from "./interfaces/IExpressError";
export { makeApp };
import mongoose from "mongoose";
import { rezervationRouter } from "./routes/rezervation.route";
import { inventoryCategoryRouter } from "./routes/category.route";
import { inventoryOfferRouter } from "./routes/offer.route";
import { IngredientsRouter } from "./routes/ingredients.route";
import { reviewRestaurantRouter } from "./routes/reviewRestaurant.route";
import { setUserRouter } from "./routes/user.route";
import { setTableRouter } from "./routes/table.route";
import { setPhotoRouter } from "./routes/photo.route";
import { setProductRouter } from "./routes/product.route";
import { setProduct_reviewRouter } from "./routes/product_review.route";
import { inventoryCategoryRouter } from "./routes/category.route";
import { inventoryOfferRouter } from "./routes/offer.route";
import { rezervationRouter } from './routes/rezervation.route';
import { IngredientsRouter } from './routes/ingredients.route';
import { reviewRestaurantRouter } from './routes/reviewRestaurant.route';
import { setUserRouter } from './routes/user.route';
import { setTableRouter } from './routes/table.route';
import { setPhotoRouter } from './routes/photo.route';
import { setProductRouter } from './routes/product.route';

let app: express.Application;

async function makeApp() {
  if (app) return app;

  app = express();

  await mongoose.connect(env.MONGO_URL);

  // middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // routes
  app.use(env.rezervation_MANAGEMENT, rezervationRouter);
  app.use(env.CATEGORY_MANAGEMENT, inventoryCategoryRouter);
  app.use(env.OFFER_MANAGEMENT, inventoryOfferRouter);
  app.use(env.Ingredients_MANAGEMENT, IngredientsRouter);
  app.use(env.ReviewRestaurant_MANAGEMENT, reviewRestaurantRouter);
  app.use(env.USER_MANAGEMENT, setUserRouter(express.Router()));
  app.use(env.TABLE_ROUTE, setTableRouter(express.Router()));
  app.use(env.PRODUCT_REVIEW, setProduct_reviewRouter(express.Router()));
  app.use(env.PHOTO_ROUTE, setPhotoRouter(express.Router()));
  app.use(env.PRODUCT_MANAGEMENT, setProductRouter(express.Router()));

  // 404
  app.use((_req, _res, next) => {
    const err: IExpressError = new Error("Not Found");
    err.status = 400;
    next(err);
  });

  // 500
  app.use(
    (
      err: IExpressError,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      res
        .status(err.status || 500)
        .send(env.NODE_ENV === "development" ? err : {});
    }
  );

  return app;
}
