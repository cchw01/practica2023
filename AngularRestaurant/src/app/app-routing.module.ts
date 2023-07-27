import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

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
  { path: 'contact', component: ContactComponent },
  { path: 'reviewRestaurant', component: HomePageComponent },
];


//to modify component for the rest of the pages




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponents = {
  HomePageComponent,
  ReservationComponent,
  LoginComponent,
  RegisterComponent
};
