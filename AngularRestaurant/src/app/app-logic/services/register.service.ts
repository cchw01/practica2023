import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  addUser(user: User): void {
    console.log(user);
    this.http
      .post<any>('http://localhost:80/user', user, this.httpOptions)
      .subscribe((data) => {
        console.log(data.id);
      });
  }
  loginUser(user: User) {
    this.http
      .get<User>('http://localhost:80/user/email/' + user.email)
      .subscribe((data) => {
        console.log(data);
        console.log('Login succesfuly');
      });
  }
}
