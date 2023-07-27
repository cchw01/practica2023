import { Router, Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";
import * as userService from "../services/user.service";

export { setUserRouter };

//create user
function setUserRouter(router: Router): Router {
  router.post("/", postUser);
  router.get("/:userId", getUser);
  router.get("/", getUsers);
  router.delete("/:userId", deleteUser);
  router.put("/", updateUser);
  router.post("/user/email", getUserByEmailAndPassword);
  return router;
}

async function postUser(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  let randomVariable: Error | User;
  try {
    randomVariable = await userService.postUser(body);
    if (randomVariable instanceof Error) {
      console.log(randomVariable);
      return next(randomVariable);
    }
    res.json(randomVariable);
  } catch (ex) {
    return next(ex);
  }
}

// async function getByEmail(req: Request, res: Response, next: NextFunction) {
//   const userEmail: string = req.params.userEmail;
//   let user: Error | User | null;
//   console.log("user route");
//   try {
//     user = await userService.getByEmail(userEmail);
//   } catch (ex) {
//     return next(ex);
//   }
//   if (user instanceof Error) {
//     return next(user);
//   }

//   if (user === null) {
//     return res.status(404).end();
//   }

//   return res.json(user);
// }

async function getUserByEmailAndPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userEmail: string = req.body.email;
  const userPassword: string = req.body.password;

  try {
    const user = await userService.getUserByEmailAndPassword(
      userEmail,
      userPassword
    );
    if (user === null) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.json(user);
  } catch (ex) {
    return next(ex);
  }
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  const userId: string = req.params.userId;
  let user: Error | User | null;

  try {
    user = await userService.getUser(userId);
  } catch (ex) {
    return next(ex);
  }
  if (user instanceof Error) {
    return next(user);
  }

  if (user === null) {
    return res.status(404).end();
  }

  return res.json(user);
}

async function getUsers(_req: Request, res: Response, next: NextFunction) {
  let users: User[] | Error = [];

  try {
    users = await userService.getUsers();
  } catch (ex: any) {
    return next(ex);
  }

  if (users instanceof Error) {
    return next(users);
  }
  return res.json(users);
}

async function deleteUser(req: Request, res: Response, next: NextFunction) {
  const userId: string = req.params.userId;
  let user: Error | User | null;

  try {
    user = await userService.deleteUser(userId);
  } catch (ex) {
    return next(ex);
  }
  if (user instanceof Error) {
    return next(user);
  }

  if (user === null) {
    return res.status(404).end();
  }

  return res.json(user);
}

async function updateUser(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let user: Error | User | undefined;
  try {
    user = await userService.updateUser(body);
  } catch (ex) {
    return next(ex);
  }

  if (user instanceof Error) {
    return res.status(404).json("Cannot find item to update!");
  }

  return res.status(200).json("Item successfully updated!");
}
