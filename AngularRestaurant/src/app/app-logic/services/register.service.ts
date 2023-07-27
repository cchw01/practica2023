import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { UserLogin } from './userLogin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserCookieManagmentService } from './user-cookie-managment.service';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  loggedInUser: User = new User();

  constructor(
    private http: HttpClient,
    private router: Router,
    private userCookie: UserCookieManagmentService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  addUser(user: User): void {
    this.http
      .post<any>('http://localhost:80/user', user, this.httpOptions)
      .subscribe((data) => {
        this.router.navigate(['/login']);
        console.log(data.id);
      });
  }

  loginUser(email: string, password: string) {
    const user: any = { email: email, password: password };
    this.http.post<any>('http://localhost:80/user/user/email', user).subscribe(
      (data) => {
        console.log(data);
        console.log('Login successful');
        this.router.navigate(['']);
        this.loggedInUser = {
          _id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          password: data.password,
          role: data.role,
          email: data.email,
        };
        this.userCookie.setUserCookie(this.loggedInUser);
      },
      (error) => {
        console.log('Error during login:', error);
      }
    );
  }
}
