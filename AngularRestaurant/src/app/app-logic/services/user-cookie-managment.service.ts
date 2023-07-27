import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCookieManagmentService {
  constructor(private cookieService: CookieService) {}
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  private setUser(user: User | null) {
    this.userSubject.next(user);
  }
  setUserCookie(user: User) {
    this.cookieService.set('user', JSON.stringify(user));
    this.cookieService.set('IsLoggedIn', 'true');
    this.cookieService.set('userRole', user.role);
  }
  isUserAuthenticated(): boolean {
    if (this.cookieService.get('IsLoggedIn') === 'true') {
      return true;
    }
    return false;
  }
  getUserCookie() {
    if (this.cookieService.check('user')) {
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
    return new User();
  }
  getUserRole(): string {
    return this.cookieService.get('userRole') || '';
  }
  removeUserCookie() {
    this.cookieService.deleteAll();
    this.cookieService.set('IsLoggedIn', 'false');
    // this.setUser(null);
  }
}
