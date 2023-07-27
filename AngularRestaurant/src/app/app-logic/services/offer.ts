export class Offer {
  _id!: string;
  productList!: string[];
  discountPercent!: number;
  startDate!: Date;
  endDate!: Date;

  constructor(offer?: Partial<Offer>) {
    Object.assign(this, offer);
  }
}
