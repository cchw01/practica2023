import { Router, Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";
import { UserDB } from "../schemas/user.schema";
import * as userService from "../services/user.service";

export { postUserRouter, getUserRouter, deleteUserRouter, updateUserRouter };

//create user
function postUserRouter(router: Router): Router {
  router.post("/", postUser);
  return router;
}
function getUserRouter(router: Router): Router {
  router.get("/", getUser);
  return router;
}
function deleteUserRouter(router: Router): Router {
  router.delete("/", deleteUser);
  return router;
}
function updateUserRouter(router: Router): Router {
  router.put("/", updateUser);
  return router;
}

async function postUser(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  let randomVariable: Error | User;

  try {
    randomVariable = await userService.postUser(body);
    res.json(randomVariable);
  } catch (ex) {
    return next(ex);
  }
  if (randomVariable instanceof Error) {
    return next(randomVariable);
  }

  // res.send("ok");
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  const userId: string = req.body["userId"];
  let user: Error | User | null;

  try {
    user = await userService.getUser(userId);
  } catch (ex) {
    return next(ex);
  }
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

async function deleteUser(
  user: Partial<User>
): Promise<Error | User | undefined> {
  if (!user || typeof user !== "object" || !user._id) {
    return Error("invalid params");
  }
  try {
    const userExists = await UserDB.findOne<User>({
      _id: user._id,
    });
    if (userExists) {
      await UserDB.deleteOne({ _id: user._id });
    }
  } catch (ex: any) {
    return ex;
  }
  return;
}
async function updateUser(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let aTable: Error | User | undefined;
  try {
    aTable = await userService.updateUser(body);
  } catch (ex) {
    return next(ex);
  }

  if (aTable instanceof Error) {
    return res.status(404).json("Cannot find item to update!");
  }

  return res.status(200).json("Item successfully updated!");
}
// );
//get
// userRouter.get(
//   "/:id",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userById = await UserDB.findById(req.params.id);
//       res.send(userById);
//     } catch (ex) {
//       return next(ex);
//     }
//   }
// );

// //get all
// userRouter.get(
//   "/",
//   async (_req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userItems = await UserDB.find();
//       res.send(userItems);
//     } catch (ex) {
//       return next(ex);
//     }
//   }
// );
// //update
// userRouter.put(
//   "/:id",
//   async (req: Request, res: Response, next: NextFunction) => {
//     const body = req.body;

//     if (
//       body.firstName ||
//       body.lastName ||
//       body.phoneNumber ||
//       body.email ||
//       body.password ||
//       body.role
//     ) {
//       try {
//         const findUser = await UserDB.findByIdAndUpdate(
//           { _id: req.params.id },
//           {
//             firstName: body.firstName,
//             lastName: body.lastName,
//             phoneNumber: body.phoneNumber,
//             email: body.email,
//           }
//         );
//         if (findUser == null) res.send("Could not find user!");

//         console.log("updated");
//         const userById = await UserDB.findById(req.params.id);
//         res.send(userById);
//       } catch (ex) {
//         return next(ex);
//       }
//     } else {
//       res.send("No attributes found!");
//     }
//   }
// );

// //delete
// userRouter.delete(
//   "/:id",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await UserDB.findByIdAndDelete(req.params.id);
//       res.send("Deleted Item");
//       console.log("deleted");
//     } catch (ex) {
//       return next(ex);
//     }
//   }
// );

// export { userRouter };
