import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantReviewComponent } from './templates/restaurant-review/restaurant-review.component';

import { MatSortModule } from '@angular/material/sort';
import { StarRatingModule } from 'angular-star-rating';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';
import { MatCardModule } from '@angular/material/card';
import { AllReviewsComponent } from './templates/all-reviews/all-reviews.component';
import { ProductComponent } from './admin-pages/product/product.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterNavComponent } from './login-register-nav/login-register-nav.component';
import { IconsComponent } from './icons/icons.component';
import { HomePageModule } from './home-page/home-page.module';
import { RestaurantReviewSingleComponent } from './templates/restaurant-review-single/restaurant-review-single.component';

import { MenuComponent } from './menu/menu.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { MatSelectModule } from '@angular/material/select';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import { MatMenuModule } from '@angular/material/menu';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { OfferAdminComponent } from './offer/admin-offer-page/admin-offer-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddOfferAdminComponent } from './offer/add-offer-admin/add-offer-admin.component';
import { EditOfferAdminComponent } from './offer/edit-offer-admin/edit-offer-admin.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { IngredientsComponent } from './ingredients-admin/ingredients/ingredients.component';
import { AddIngredientComponent } from './ingredients-admin/add-ingredient/add-ingredient.component';
import { EditIngredientsComponent } from './ingredients-admin/edit-ingredients/edit-ingredients.component';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';
import { EditProductAdminComponent } from './product/edit-product-admin/edit-product-admin.component';
import { AddProductAdminComponent } from './product/add-product-admin/add-product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantReviewComponent,
    RestaurantReviewPageComponent,
    AllReviewsComponent,
    ProductComponent,

    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    RestaurantReviewSingleComponent,

    LoginRegisterNavComponent,
    IconsComponent,
    MenuComponent,
    ProductItemComponent,
    ProductPageComponent,
    CategorySectionComponent,
    ReservationComponent,
    OfferAdminComponent,
    AddOfferAdminComponent,
    EditOfferAdminComponent,
    UserAdminComponent,
    EditUserAdminComponent,
    AddUserAdminComponent,
    ContactComponent,
    ConfirmReservationComponent,
    IngredientsComponent,
    AddIngredientComponent,
    EditIngredientsComponent,
    ProductAdminComponent,
    EditProductAdminComponent,
    AddProductAdminComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    StarRatingModule.forRoot(),
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    ScrollingModule,
    MatDividerModule,
    HomePageModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    CookieService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
