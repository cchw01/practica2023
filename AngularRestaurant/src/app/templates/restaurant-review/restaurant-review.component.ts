import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClickEvent } from 'angular-star-rating';
import { ReviewRestaurant } from 'src/app/app-logic/services/review-restaurant';
import { ReviewRestaurantService } from 'src/app/app-logic/services/review-restaurant.service';
import { UserCookieManagmentService } from 'src/app/app-logic/services/user-cookie-managment.service';
@Component({
  selector: 'restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css'],
})
export class RestaurantReviewComponent implements OnInit {
  addReviewFormGroup!: FormGroup;
  onClickResult!: ClickEvent | undefined;
  totalRating: number = 0;
  constructor(
    private fb: FormBuilder,
    private reviewRestaurantService: ReviewRestaurantService,
    private userCookieManagement: UserCookieManagmentService
    ) {}
  ngOnInit(): void {
    this.addReviewFormGroup = this.fb.group({
      message: ['', Validators.required],
      ratingStars: ['', Validators.required],
    });
    this.updateTotalRating();
  }

  onClick = ($event: ClickEvent) => {
    this.onClickResult = $event;
  };

  starNumberVerification(): boolean {
    if (this.onClickResult == undefined) {
      alert('Selectati numarul de stele.');
      return false;
    } else if (this.onClickResult.rating == 0) {
      alert('Numarul de stele nu poate fi 0.');
      return false;
    }
    this.addReviewFormGroup.value.ratingStars = this.onClickResult.rating;
    return true;
  }
  updateTotalRating(): void {
    this.reviewRestaurantService.getAllReviews().subscribe((reviews: ReviewRestaurant[]) => {
      const totalStars = reviews.reduce((acc, review) => acc + review.ratingStars, 0);
      this.totalRating = totalStars / reviews.length;
    });}
  
  validateTextField(): boolean {
    if (this.addReviewFormGroup.value.message == '') {
      alert('Mesajul nu poate fi gol.');
      return false;
    }
    return true;
  }

  validateAllFields(): boolean {
    if (this.starNumberVerification() && this.validateTextField()) {
      return true;
    }
    return false;
  }

  isUserAuthenticated():boolean{
    return this.userCookieManagement.isUserAuthenticated()
  }

  onSubmit(): void {
    if (this.validateAllFields()) {
      let Instance = {
        id: "",
        message: this.addReviewFormGroup.value.message,
        ratingStars: this.addReviewFormGroup.value.ratingStars,
        user: this.userCookieManagement.getUserCookie()._id, // here is where the current logged in user id goes
      };
      this.reviewRestaurantService.addReview(Instance);
      window.location.reload();
    }
  }
}
