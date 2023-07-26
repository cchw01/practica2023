import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserCookieManagmentService {
  constructor(private cookieService: CookieService) {}

  setUserCookie(user: User) {
    this.cookieService.set('user', JSON.stringify(user));
    this.cookieService.set('IsLoggedIn', 'true');
  }
  isUserAuthenticated(): boolean {
    if (this.cookieService.get('IsLoggedIn')) {
      return true;
    }
    return false;
  }
  getUserCookie(): User {
    var res = JSON.parse(this.cookieService.get('user'));
    var usr: User = {
      _id: res._id,
      firstName: res.firstName,
      lastName: res.lastName,
      phoneNumber: res.phoneNumber,
      password: res.password,
      role: res.role,
      email: res.email,
    };
    return usr;
  }
  removeUserCookie() {
    this.cookieService.delete('user');
    this.cookieService.set('IsLoggedIn', 'false');
  }
}
