import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';

import { HomePageComponent } from './home-page/home-page.component';

import { ProductComponent } from './admin-pages/product/product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  //to modify component for the rest of the pages

  {path: 'menu', component: HomePageComponent},
  {path: 'orders', component: HomePageComponent},
  {path: 'reservations', component: HomePageComponent},
  {path: 'contact', component: HomePageComponent},
  {path: 'reviewRestaurant', component: RestaurantReviewPageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'register', component: HomePageComponent},
  {path:'productAdmin', component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
};
