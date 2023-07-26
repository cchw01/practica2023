import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterNavComponent } from './login-register-nav/login-register-nav.component';
import { IconsComponent } from './icons/icons.component';
import { HomePageModule } from './home-page/home-page.module';
import { MatButtonModule } from '@angular/material/button';
import { ReservationComponent } from './reservation/reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
// import { MomentInput } from 'moment';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { AddProductAdminComponent } from './product/add-product-admin/add-product-admin.component';
import { EditProductAdminComponent } from './product/edit-product-admin/edit-product-admin.component';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginRegisterNavComponent,
    IconsComponent,
    ReservationComponent,
    AddProductAdminComponent,
    EditProductAdminComponent,
    ProductAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ScrollingModule,
    MatDividerModule,
    HomePageModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
