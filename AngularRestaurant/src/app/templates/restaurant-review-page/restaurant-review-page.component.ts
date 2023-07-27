import { Component } from '@angular/core';
import { ReviewRestaurant } from 'src/app/app-logic/services/review-restaurant';
import { ReviewRestaurantService } from 'src/app/app-logic/services/review-restaurant.service';

@Component({
  selector: 'app-restaurant-review-page',
  templateUrl: './restaurant-review-page.component.html',
  styleUrls: ['./restaurant-review-page.component.css']
})
export class RestaurantReviewPageComponent {
  reviews?: Array<ReviewRestaurant>;

  constructor(private reviewService: ReviewRestaurantService){
    this.reviewService.getAllReviews().subscribe((reviews)=>{
      this.reviews = reviews;
      this.reviews.forEach(review => {
        reviewService.getUserById(review.user).subscribe((user)=>{
          console.log(user);
          review.user = user.firstName +" "+ user.lastName;
        })
      });
  });
  }

  ngOnInit(){

  }
}
