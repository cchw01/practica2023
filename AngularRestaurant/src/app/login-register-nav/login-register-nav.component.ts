import { Component, OnInit } from '@angular/core';
import { UserCookieManagmentService } from '../app-logic/services/user-cookie-managment.service';
import { User } from '../app-logic/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register-nav',
  templateUrl: './login-register-nav.component.html',
  styleUrls: ['./login-register-nav.component.css'],
})
export class LoginRegisterNavComponent implements OnInit {
  user: User = new User();
  constructor(
    public userCookies: UserCookieManagmentService,
    private router: Router
  ) {
    this.user = this.userCookies.getUserCookie();
  }
  ngOnInit(): void {
    if (this.userCookies.getUserCookie()._id == '') {
      this.user = this.userCookies.getUserCookie();
    }
  }
  logout() {
    this.userCookies.removeUserCookie();
    this.router.navigate(['/']);
  }
}
