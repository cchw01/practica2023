export class Table {
  _id!: string;
  numberOfPlaces?: number;
  location?: string;

  public constructor(init?: Partial<Table>) {
    Object.assign(this, init);
  }
}
