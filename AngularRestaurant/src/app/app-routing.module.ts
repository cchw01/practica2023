import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  //to modify component for the rest of the pages

  {path: 'menu', component: MenuComponent},
  {path: 'product/:id', component: ProductPageComponent},

  {path: 'orders', component: HomePageComponent},
  {path: 'reservations', component: ReservationComponent },
  {
    path: 'reservations/confirmedReservation',
    component: ConfirmReservationComponent,
  },
  {path: 'contact', component: HomePageComponent},
  {path: 'reviewRestaurant', component: HomePageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'register', component: HomePageComponent},
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'user-admin/edit/:id', component: EditUserAdminComponent },
  { path: 'user-admin/add', component: AddUserAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  MenuComponent
  ReservationComponent,
  EditUserAdminComponent,
};
