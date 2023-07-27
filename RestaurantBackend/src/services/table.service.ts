import { TableDb } from '../schemas/table.schema';
import { Table } from '../models/table.model';

export {
  getTable,
  saveTable,
  deleteTable,
  updateTable,
  getAllTables,
  getTableById,
};

async function getTable(location: string): Promise<Error | Table | null> {
  if (!location || typeof location !== 'string') {
    return Error('invalid params');
  }

  try {
    const aTable = await TableDb.findOne<Table>({ location: location });
    return aTable;
  } catch (ex: any) {
    return ex;
  }
}
async function getTableById(_id: string): Promise<Error | Table | null> {
  if (!_id || typeof _id !== 'string') {
    return Error('invalid params');
  }
  try {
    const user = await TableDb.findOne<Table>({ _id: _id });
    return user;
  } catch (ex: any) {
    return ex;
  }
}

async function getAllTables(): Promise<Error | Table[] | null> {
  try {
    const tables = await TableDb.find<Table>({});
    return tables;
  } catch (ex: any) {
    return ex;
  }
}

async function saveTable(aTable: Partial<Table>): Promise<Error | Table> {
  if (!aTable || typeof aTable !== 'object' || !aTable.location) {
    return Error('invalid params');
  }

  try {
    const aTableExists = await TableDb.findOne<Table>({
      location: aTable.location,
    });
    if (aTableExists) {
      return Error('item already exists');
    }
  } catch (ex: any) {
    return ex;
  }

  const tableModel = new TableDb({
    numberOfPlaces: aTable.numberOfPlaces,
    location: aTable.location,
  });

  try {
    await tableModel.save();
  } catch (ex: any) {
    return ex;
  }

  return tableModel;
}

async function deleteTable(
  aTable: Partial<Table>
): Promise<Error | Table | undefined> {
  if (!aTable || typeof aTable !== 'object' || !aTable.location) {
    return Error('invalid params');
  }

  try {
    const aTableExists = await TableDb.findOne<Table>({
      location: aTable.location,
    });
    if (aTableExists) {
      await TableDb.deleteOne({ location: aTable.location });
    }
  } catch (ex: any) {
    return ex;
  }

  return undefined;
}

async function updateTable(
  newTable: Partial<Table>
): Promise<Error | Table | undefined> {
  if (!newTable || typeof newTable !== 'object') {
    return Error('invalid params');
  }

  try {
    var updateResponse = await TableDb.findOneAndUpdate<Table>(
      {
        _id: newTable,
      },
      newTable
    );

    if (updateResponse == null) {
      return Error('Invalid');
    }
  } catch (ex: any) {
    return ex;
  }

  return undefined;
}
