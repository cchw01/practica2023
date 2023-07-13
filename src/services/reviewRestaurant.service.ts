import { reviewRestaurant } from '../models/reviewRestaurant.model';
import { reviewRestaurantDB } from '../schemas/reviewRestaurant.schema';

export async function postreviewRestaurant(
  reviewRestaurant: reviewRestaurant
): Promise<Error | reviewRestaurant> {
  if (!reviewRestaurant || !reviewRestaurant.user) {
    return Error('The parameters given are not valid!');
  }
  try {
    const exists = await reviewRestaurantDB.findOne({
      user: reviewRestaurant.user,
    });
    if (exists) {
      return Error('The item added to the database already exists!');
    }
  } catch (ex: any) {
    return ex;
  }
  const NewreviewRestaurant = new reviewRestaurantDB({
    user: reviewRestaurant.user,
    ratingStars: reviewRestaurant.ratingStars,
    message: reviewRestaurant.message,
  });
  NewreviewRestaurant.save();
  return NewreviewRestaurant;
}

export async function getReviewRestaurant(
  reviewRestaurant: reviewRestaurant
): Promise<Error | reviewRestaurant | undefined> {
  if (!reviewRestaurant || !reviewRestaurant.user) {
    return Error('The parameters given are not valid!');
  }
  try {
    const exists = await reviewRestaurantDB.findOne({
      user: reviewRestaurant.user,
    });
    if (exists) {
      return exists;
    }
  } catch (ex: any) {
    return ex;
  }
  return undefined;
}
