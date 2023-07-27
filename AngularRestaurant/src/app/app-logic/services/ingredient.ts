
export class Ingredients {
  id!: string;
  name!: string;
  stoc!: number;
  isAlergen!: boolean;

  public constructor(init?: Partial<Ingredients>) {
    Object.assign(this, init);
  }
}
