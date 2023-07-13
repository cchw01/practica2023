import * as express from "express";
import { env } from "./env";
import { IExpressError } from "./interfaces/IExpressError";
import { setUserRouter } from "./routes/user.route";
export { makeApp };
import mongoose from "mongoose";
import { tableRouter } from "./routes/table.route";
import { setPhotoRouter } from "./routes/photo.route";
import { setProduct_reviewRouter } from "./routes/product_review.route";

let app: express.Application;

async function makeApp() {
  if (app) return app;

  app = express();

  await mongoose.connect(env.MONGO_URL);

  // middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // routes
  app.use(env.USER_MANAGEMENT, setUserRouter(express.Router()));

  // routes
  app.use(env.MAIN_ENDPOINT, tableRouter);
  app.use(env.PRODUCUT_REVIEW, setProduct_reviewRouter(express.Router()));
  app.use(env.PHOTO_ROUTE, setPhotoRouter(express.Router()));
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
