import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { OfferService } from 'src/app/app-logic/services/offer.service';
import { OfferAdminService } from 'src/app/app-logic/services/offer-admin.service';

@Component({
  selector: 'app-admin-offer-page',
  templateUrl: './admin-offer-page.component.html',
  styleUrls: ['./admin-offer-page.component.css'],
})
export class OfferAdminComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  offerAdmin: any;
  offerList!: Array<OfferService>;
  ngOnInit(): void {
    this.offerList = this.offerService.getData();
    console.log('Test1 ' + this.offerService.getData());
    //this.userList = new MatTableDataSource<User>(this.user.getData());

    //this.userList.paginator = this.paginator;
    // this.userList.sort = this.sort;
    console.log(this.offerList);
  }

  constructor(private offerService: OfferAdminService) {}
  deleteOffer(id?: string) {
    // let result = confirm('Do you want to delete the user?');
    // if (result) {
    //   this.userService.deleteUser();
    //   var target = id.target || id.srcElement || id.currentTarget;
    //   var idAttr = target.attributes.id;
    //   this.userService.deleteUser(idAttr);
    // }
  }

  offerAdminColumn: string[] = [
    'productList',
    'discountPercent',
    'startDate',
    'endDate',
    'actions',
  ];
}