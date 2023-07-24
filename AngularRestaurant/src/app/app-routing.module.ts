import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';

const routes: Routes = [
  {path:'review', component:RestaurantReviewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
