import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
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
    this.http.get<any>('http://localhost:80/user').subscribe(() => {
      console.log(user._id);
    });
  }
}
