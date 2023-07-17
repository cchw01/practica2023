import { rezervation } from "../models/rezervation.model";
import { rezervationDB } from "../schemas/rezervation.schema";

export async function postrezervation(
  rezervation: rezervation
): Promise<Error | rezervation> {
  if (!rezervation || !rezervation.user) {
    return Error("The parameters given are not valid!");
  }
  try {
    const exists = await rezervationDB.findOne({
      user: rezervation.user,
    });
    if (exists) {
      return Error("The item added to the database already exists!");
    }
  } catch (ex: any) {
    return ex;
  }
  const Newrezervation = new rezervationDB({
    user: rezervation.user,
    table: rezervation.table,
    rezervationStrat: rezervation.rezervationStrat,
    rezervationEnd: rezervation.rezervationEnd,
    userNotes: rezervation.userNotes,
    status: rezervation.status,
    numberOfPersons: rezervation.numberOfPersons,
  });
  Newrezervation.save();
  return Newrezervation;
}

export async function getrezervation(
  rezervation: rezervation
): Promise<Error | rezervation | undefined> {
  if (!rezervation || !rezervation.user) {
    return Error("The parameters given are not valid!");
  }
  try {
    const exists = await rezervationDB.findOne({
      user: rezervation.user,
    });
    if (exists) {
      return exists;
    }
  } catch (ex: any) {
    return ex;
  }
  return undefined;
}
