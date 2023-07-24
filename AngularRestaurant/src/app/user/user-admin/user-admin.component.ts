import { Component, ViewChild,OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { User } from 'src/app/app-logic/services/user';
import { UserAdminService } from 'src/app/app-logic/services/user-admin.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  @ViewChild(MatPaginator,{static:true}) paginator?:MatPaginator|undefined;
  @ViewChild(MatSort,{static:true}) sort?:MatSort|undefined;
  userAdmin: any;
  userList!:Array<User>;
  ngOnInit(): void {
    this.userList= this.userService.getData();
    console.log("Test1 "+this.userService.getData())
    //this.userList = new MatTableDataSource<User>(this.user.getData());
    
    //this.userList.paginator = this.paginator;
   // this.userList.sort = this.sort;
    console.log(this.userList)
  }

  constructor(private userService :UserAdminService)
  {}

  userAdminColumn:string[]=[
    'firstName',
    'lastName',
    'phoneNumber',
    'role',
    'email',
    'actions'
    ]
}
