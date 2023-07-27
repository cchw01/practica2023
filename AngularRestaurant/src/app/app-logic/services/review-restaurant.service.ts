import { Injectable } from '@angular/core';
import { ReviewRestaurant } from './review-restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable } from 'rxjs';

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

  getUserById(id:string): Observable<any>{
    return this.http.get<any>('http://localhost:80/user/' + id);
  }

  getAllReviews(): Observable<Array<ReviewRestaurant>>{
    let tmpReviews: Array<ReviewRestaurant> = new Array<ReviewRestaurant>();

    var callback = this.http
    .get<Array<ReviewRestaurant>>('http://localhost:80/reviewRestaurant/restaurant')

    return callback;
  }
}
