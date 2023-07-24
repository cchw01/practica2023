import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  userList?:Array<User>;

  constructor( private http:HttpClient) { 

  }
  // user: Array<User> = [
  //   {​
  //     _id:"1001",
  //     firstName: "PC01",
  //     lastName: "Andrei Stancu",
  //     password: "Dellprecision865465PC",
  //     email: "Level@gmail.com",
  //     phoneNumber:"546546464",
  //     role:"bdsk"
  //   }​
  // ]


  getData():any
  { 
    
        return this.http.get<any>('http://localhost:80/user')
           
  }

  addItem(user:User):void{
    this.http.post<any> ('http://localhost:80/user', user)
    .subscribe(data=>{});
  }


  updateUser(user:User):void{
    const body = { firstName: user.firstName, lastName:user.lastName, password:user.password, phoneNumber:user.phoneNumber, email:user.email, role:user.role };
    this.http.put<any>('http://localhost:80/user', body)
    .subscribe();
  }
}


