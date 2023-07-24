import { Injectable } from '@angular/core';
import { ReviewRestaurant } from './review-restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewRestaurantService {
  constructor(private http: HttpClient) {}

  addReview(reviewRestaurant: ReviewRestaurant): void {
    this.http
      .post<any>('http://localhost:80/reviewRestaurant/restaurant', reviewRestaurant)
      .subscribe((data) => {});
  }
}