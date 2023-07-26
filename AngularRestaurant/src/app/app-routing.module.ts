import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';import { ProductComponent } from './admin-pages/product/product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: HomePageComponent },
  { path: 'orders', component: HomePageComponent },
  { path: 'reservations', component: ReservationComponent },
  {
    path: 'reservations/confirmedReservation',
    component: ConfirmReservationComponent,
  },
  { path: 'contact', component: HomePageComponent },
  { path: 'login', component: HomePageComponent },
  { path: 'register', component: HomePageComponent },


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
  ReservationComponent,
  LoginComponent,
  RegisterComponent
};
