import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css']
})
export class RestaurantReviewComponent implements OnInit{
  addReviewFormGroup!:FormGroup;

  constructor(
    private fb:FormBuilder,


  ){}
  ngOnInit(): void {
    this.addReviewFormGroup = this.fb.group({
      description:['', Validators.required],
      rating:['', Validators.required]
    })
  }


}
