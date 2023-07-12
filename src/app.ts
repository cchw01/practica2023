import * as express from "express";
import { env } from "./env";
import { IExpressError } from "./interfaces/IExpressError";
import { setUserRouter } from "./routes/user.route";
export { makeApp };
import mongoose from "mongoose";
import { setTableRouter } from "./routes/table.route";
import { setPhotoRouter } from "./routes/photo.route";

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
  app.use(env.TABLE_ENDPOINT, setTableRouter(express.Router()));
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
