import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClickEvent } from 'angular-star-rating';
import { ReviewRestaurant } from 'src/app/app-logic/services/review-restaurant';
import { ReviewRestaurantService } from 'src/app/app-logic/services/review-restaurant.service';

@Component({
  selector: 'restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css'],
})
export class RestaurantReviewComponent implements OnInit {
  addReviewFormGroup!: FormGroup;
  onClickResult!: ClickEvent | undefined;

  constructor(private fb: FormBuilder, private reviewRestaurantService: ReviewRestaurantService) {}
  ngOnInit(): void {
    this.addReviewFormGroup = this.fb.group({
      message: ['', Validators.required],
      ratingStars: ['', Validators.required],
    });
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

  onSubmit(): void {
    if (this.validateAllFields()) {
      let Instance = {
        id: "",
        message: this.addReviewFormGroup.value.message,
        ratingStars: this.addReviewFormGroup.value.ratingStars,
        user: "64b0f32682e397dcede7911d",
      };
      this.reviewRestaurantService.addReview(Instance);
      console.log(Instance);
    }
  }
}
