import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserCookieManagmentService } from '../app-logic/services/user-cookie-managment.service';
import { User } from '../app-logic/services/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-register-nav',
  templateUrl: './login-register-nav.component.html',
  styleUrls: ['./login-register-nav.component.css'],
})
export class LoginRegisterNavComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private userSubscription: Subscription;

  constructor(
    public userCookies: UserCookieManagmentService,
    private router: Router
  ) {
    this.userSubscription = this.userCookies.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {

    if (this.userCookies.getUserCookie()._id == '') {
      const userData = this.userCookies.getUserCookie();
      if (userData) {
        this.user = userData; 
      }  
    }

    this.user = this.userCookies.getUserCookie();

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.userCookies.removeUserCookie();
    this.router.navigate(['/']);
  }
  // openNewWindowAndReload(): void {
  //   const newWindow = window.open('your-new-window-url', '_blank');
  //   newWindow?.location.reload();
  // }
  // callBothFunciotns(): void {
  //   this.logout();
  //   this.openNewWindowAndReload();
  // }
}
