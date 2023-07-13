import { Router, Request, Response, NextFunction } from "express";
import { Order } from "../models/order.model";
import * as orderService from "../services/order.service";

export function setOrderRouter(router: Router): Router {

router.post("/", postOrder);
router.get("/:orderId", getOrder);
router.get("/",getOrders);
router.delete("/:orderId", deleteOrder);
router.put("/", updateOrder);

return router;
}



async function postOrder(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  let randomVariable: Error | Order;
  try {
    randomVariable = await orderService.postOrder(body);
  } catch (ex) {
    return next(ex);
  }
  if (randomVariable instanceof Error) {
    return next(randomVariable);
  }
  return res.json(randomVariable);
}

async function getOrder(req: Request, res: Response, next: NextFunction) {
  const orderId: string = req.params.orderId;
  let order: Error | Order | null;

  try {
    order = await orderService.getOrder(orderId);
  } catch (ex) {
    return next(ex);
  }
  if (order instanceof Error) {
    return next(order);
  }

  if (order === null) {
    return res.status(404).end();
  }

  return res.json(order);
}

async function getOrders(_req: Request, res: Response, next: NextFunction) {
  
  let orders: Order[] | Error = [];
  
  try {
      orders = await orderService.getOrders();
  } catch (ex: any) {
      return next(ex);
  }
  
  if (orders instanceof Error) {
      return next(orders);
  }
  
  console.log("getPhotos(), photos ", orders);
  return res.json(orders);

}

async function deleteOrder(req: Request, res: Response, next: NextFunction) {
  const orderId: string = req.params.orderId;
  let order: Error | Order | null;

  try {
    order = await orderService.deleteOrder(orderId);
  } catch (ex) {
    return next(ex);
  }
  if (order instanceof Error) {
    return next(order);
  }

  if (order === null) {
    return res.status(404).end();
  }

  return res.json(order);
}

async function updateOrder(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let order: Error | Order | undefined;
  try {
    order = await orderService.updateOrder(body);
  } catch (ex) {
    return next(ex);
  }

  if (order instanceof Error) {
    return res.status(404).json("Cannot find order to update!");
  }

  return res.status(200).json("Order successfully updated!");
}
