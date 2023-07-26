

export class OfferService{
  _id!: string;
  productList!:string;
  discountPercent!:number;
  startDate!:Date;
  endDate!:Date;

  public constructor(init?: Partial<OfferService>) {
    Object.assign(this, init);
  }
}