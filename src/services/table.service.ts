import { TableDb } from "../schemas/table.schema";
import { Table } from "../models/table.model";

export { getTable, saveTable, deleteTable };

async function getTable(location: string): Promise<Error | Table | null> {

 if (!location || typeof location !== "string") {
  return Error("invalid params");
 }

 try {
  const aTable = await TableDb.findOne<Table>({ location: location });
  return aTable;
 } catch (ex: any) {
  return ex;
 }
}

async function saveTable(aTable: Partial<Table>): Promise<Error | Table> {

 if (!aTable || typeof aTable !== "object" || !aTable.location) {
  return Error("invalid params");
 }

 try {
  const aTableExists = await TableDb.findOne<Table>({ location: aTable.location });
  if (aTableExists) {
   return Error("item already exists");
  }
 } catch (ex: any) {
  return ex;
 }

 const tableModel = new TableDb({
  numberOfPlaces: aTable.numberOfPlaces,
  location: aTable.location
 });

 try {
  await tableModel.save();
 } catch (ex: any) {
  return ex;
 }

 return tableModel;
}


async function deleteTable(aTable: Partial<Table>): Promise<Error | Table | undefined> {
  if (!aTable || typeof aTable !== "object" || !aTable.location) {
    return Error("invalid params");
  }

  try {
    const aTableExists = await TableDb.findOne<Table>({
      location: aTable.location,
    });
    if (aTableExists) {
        await TableDb.deleteOne({location: aTable.location});
    }
  } catch (ex: any) {
    return ex;
  }

  return undefined;
}
