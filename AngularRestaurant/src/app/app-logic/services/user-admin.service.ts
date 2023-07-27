import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  userList?: Array<User>;

  constructor(private http: HttpClient) {}

  getData(): Observable<User> {
    return this.http.get<User>('http://localhost:80/user');
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
  getUserById(id?: string): Observable<User> {
    return this.http.get<User>('http://localhost:80/user/' + id);
  }
  getUserByIdString(id?: string): any {
    this.http.get<User>('http://localhost:80/user/' + id).subscribe((x) => {
      console.log(x.firstName + ' ' + x.lastName);
      return x.firstName + ' ' + x.lastName;
    });
  }

  deleteUser(id?: string) {
    return this.http
      .delete<User>('http://localhost:80/user/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
  addUser(user: User) {
    this.http.post<User>('http://localhost:80/user/', user).subscribe();
  }
}
