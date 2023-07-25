import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-review-single',
  templateUrl: './restaurant-review-single.component.html',
  styleUrls: ['./restaurant-review-single.component.css']
})
export class RestaurantReviewSingleComponent {
  @Input() username?:string;
  @Input() message?:string;
  @Input() starNumber?:number;
}
