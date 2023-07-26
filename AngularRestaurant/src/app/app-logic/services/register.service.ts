import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { UserLogin } from './userLogin';
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

  // loginUser(email: string, password: string) {
  //   const user: any = { email: email, password: password };
  //   this.http
  //     .post<User>('http://localhost:80/user/user/email', user, this.httpOptions)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         console.log('Login successful');
  //       },
  //       (error) => {
  //         console.log('Error during login:', error);
  //       }
  //     );
  // }
  loginUser(email: string, password: string) {
    const user: any = { email: email, password: password };
    this.http.post<any>('http://localhost:80/user/user/email', user).subscribe(
      (data) => {
        console.log(data);
        console.log('Login successful');
      },
      (error) => {
        console.log('Error during login:', error);
      }
    );
  }
}
