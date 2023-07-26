import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';
import { AddProductAdminComponent } from './product/add-product-admin/add-product-admin.component';
import { EditProductAdminComponent } from './product/edit-product-admin/edit-product-admin.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  //to modify component for the rest of the pages

  {path: 'menu', component: HomePageComponent},
  {path: 'orders', component: HomePageComponent},
  {path: 'reservations', component: ReservationComponent },
  {path: 'contact', component: HomePageComponent},
  {path: 'reviewRestaurant', component: HomePageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'register', component: HomePageComponent},
  { path: 'product-admin/edit/:id', component: EditProductAdminComponent },
  {path: 'product-admin', component: ProductAdminComponent},
  {path: 'product-admin/add', component: AddProductAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = {
  HomePageComponent,
  ReservationComponent,
  ProductAdminComponent,
};
