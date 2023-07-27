import { Component } from '@angular/core';
import { UserCookieManagmentService } from '../app-logic/services/user-cookie-managment.service';
import { User } from '../app-logic/services/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: User;
  constructor(public userCookies: UserCookieManagmentService) {
    this.user = this.userCookies.getUserCookie();
  }
}
