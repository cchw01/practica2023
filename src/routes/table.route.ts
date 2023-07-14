import { Router, Request, Response, NextFunction } from "express";
import { Table } from "../models/table.model";
import * as tableService from "../services/table.service";

export { setTableRouter };

function setTableRouter(router: Router): Router {
  router.get("/getTable", getATable);
  router.get("/getTables", getAllTables);
  router.post("/createTable", postATable);
  router.delete("/deleteTable", deleteATable);
  router.put("/updateTable", updateATable);
  return router;
}

async function getAllTables(req: Request, res: Response, next: NextFunction) {
  let allTable: Error | Table[] | null;

  try {
    allTable = await tableService.getAllTables();
  } catch (ex) {
    console.log(req);
    return next(ex);
  }

  if (allTable instanceof Error) {
    return next(allTable);
  }

  if (allTable === null) {
    return res.status(404).end();
  }

  return res.json(allTable);
}

async function getATable(req: Request, res: Response, next: NextFunction) {
  const query: string = req.body["location"];

  let aTable: Error | Table | null;

  try {
    aTable = await tableService.getTable(query);
  } catch (ex) {
    return next(ex);
  }

  if (aTable instanceof Error) {
    return next(aTable);
  }

  if (aTable === null) {
    return res.status(404).end();
  }

  return res.json(aTable);
}

async function postATable(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let aTable: Error | Table;
  try {
    aTable = await tableService.saveTable(body);
  } catch (ex) {
    return next(ex);
  }

  if (aTable instanceof Error) {
    return next(aTable);
  }

  console.log("postATable(), aTable:", aTable);
  return res.status(201).json(aTable);
}

async function deleteATable(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let aTable: Error | Table | undefined;
  try {
    aTable = await tableService.deleteTable(body);
  } catch (ex) {
    return next(ex);
  }

  if (aTable instanceof Error) {
    return next(aTable);
  }

  return res.status(200).json("Item successfully deleted!");
}

async function updateATable(req: Request, res: Response, next: NextFunction) {
  const body: any = req.body;

  let aTable: Error | Table | undefined;
  try {
    aTable = await tableService.updateTable(body);
  } catch (ex) {
    return next(ex);
  }

  if (aTable instanceof Error) {
    return res.status(404).json("Cannot find item to update!");
  }

  return res.status(200).json("Item successfully updated!");
}
