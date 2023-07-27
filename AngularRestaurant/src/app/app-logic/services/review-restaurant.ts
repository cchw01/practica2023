export class ReviewRestaurant {
    id!: string;
    message!: string;
    ratingStars!: number;
    user!: string;

    constructor(reviewRestaurant?: Partial<ReviewRestaurant>) {
      Object.assign(this, reviewRestaurant);
    }
  }
