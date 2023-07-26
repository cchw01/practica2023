import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferAdminComponent } from './admin-offer-page/admin-offer-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  //to modify component for the rest of the pages

  {path: 'menu', component: HomePageComponent},
  {path: 'orders', component: HomePageComponent},
  {path: 'reservations', component: ReservationComponent },
  {path: 'contact', component: HomePageComponent},
  {path: 'offer', component: OfferAdminComponent},
  {path: 'reviewRestaurant', component: HomePageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'register', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  ReservationComponent,
  OfferAdminComponent
};
