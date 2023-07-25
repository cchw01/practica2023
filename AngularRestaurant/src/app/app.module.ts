import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantReviewComponent } from './templates/restaurant-review/restaurant-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingModule } from 'angular-star-rating';
import { RestaurantReviewPageComponent } from './templates/restaurant-review-page/restaurant-review-page.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AllReviewsComponent } from './templates/all-reviews/all-reviews.component';
import { ProductComponent } from './admin-pages/product/product.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantReviewSingleComponent } from './templates/restaurant-review-single/restaurant-review-single.component';


@NgModule({
  declarations: [AppComponent,
    RestaurantReviewComponent,
    RestaurantReviewPageComponent,
    AllReviewsComponent,
    ProductComponent,
    NavbarComponent,
    RestaurantReviewSingleComponent
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
    HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
