import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  userList?: Array<User>;

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>('http://localhost:80/user');
  }

  addItem(user: User): void {
    this.http
      .post<any>('http://localhost:80/user', user)
      .subscribe((data) => {});
  }

  updateUser(user: User, id: any): void {
    const body = {
      _id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      password: user.password,
      role: user.role,
      email: user.email,
    };
    this.http.put<any>('http://localhost:80/user/', body).subscribe();
  }
}
