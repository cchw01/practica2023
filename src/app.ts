import * as express from "express";
import { env } from "./env";
import { IExpressError } from "./interfaces/IExpressError";
import { getUserRouter } from "./routes/user.route";
import { postUserRouter } from "./routes/user.route";
import { updateUserRouter } from "./routes/user.route";
import { deleteUserRouter } from "./routes/user.route";
export { makeApp };
import mongoose from "mongoose";

let app: express.Application;

async function makeApp() {
  if (app) return app;

  app = express();

  await mongoose.connect(env.MONGO_URL);

  // middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // routes
  app.use(env.USER_MANAGEMENT, getUserRouter(express.Router()));
  app.use(env.USER_MANAGEMENT, postUserRouter(express.Router()));
  app.use(env.USER_MANAGEMENT, updateUserRouter(express.Router()));
  app.use(env.USER_MANAGEMENT, deleteUserRouter(express.Router()));

  // 404
  app.use((_req, _res, next) => {
    const err: IExpressError = new Error("Not Found");
    err.status = 404;
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
