export class ProductReview {
    _id!: string;
    Product!: string;
    reviewDate!: Date;
    User!: string;
    Message!: string;
    starRating!: number;
  
    public constructor(init?: Partial<ProductReview>) {
      Object.assign(this, init);
    }
  }
  