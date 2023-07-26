import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';
import { MenuComponent } from './menu/menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; import { ProductComponent } from './admin-pages/product/product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'reservations/confirmedReservation', component: ConfirmReservationComponent },
  { path: 'contact', component: HomePageComponent },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'user-admin/edit/:id', component: EditUserAdminComponent },
  { path: 'user-admin/add', component: AddUserAdminComponent },
  { path: 'orders', component: HomePageComponent },
  { path: 'reviewRestaurant', component: RestaurantReviewPageComponent },
  { path: 'productAdmin', component: ProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponents = {
  HomePageComponent,
  MenuComponent,
  ReservationComponent,
  LoginComponent,
  RegisterComponent,
  EditUserAdminComponent,
};
