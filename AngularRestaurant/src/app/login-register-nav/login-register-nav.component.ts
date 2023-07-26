import { Component, OnInit } from '@angular/core';
import { UserCookieManagmentService } from '../app-logic/services/user-cookie-managment.service';
import { User } from '../app-logic/services/user';

@Component({
  selector: 'app-login-register-nav',
  templateUrl: './login-register-nav.component.html',
  styleUrls: ['./login-register-nav.component.css'],
})
export class LoginRegisterNavComponent {
  user!: User;
  constructor(public userCookies: UserCookieManagmentService) {
    this.user = this.userCookies.getUserCookie();
  }
}
