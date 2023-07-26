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
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditUserAdminComponent } from './user/edit-user-admin/edit-user-admin.component';
import { MatSelectModule } from '@angular/material/select';
import { AddUserAdminComponent } from './user/add-user-admin/add-user-admin.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginRegisterNavComponent,
    IconsComponent,
    ReservationComponent,
    UserAdminComponent,
    EditUserAdminComponent,
    AddUserAdminComponent,
    ConfirmReservationComponent,
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
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
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
