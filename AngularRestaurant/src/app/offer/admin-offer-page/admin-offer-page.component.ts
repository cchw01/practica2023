import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { OfferService } from 'src/app/app-logic/services/offer.service';
import { OfferAdminService } from 'src/app/app-logic/services/offer-admin.service';
import { Offer } from 'src/app/app-logic/services/offer';
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
  offerList!: any;
  ngOnInit(): void {
    this.offerService.getData().subscribe((res: any) => {
      this.offerList = new MatTableDataSource<Offer>(res);
      this.offerList.paginator = this.paginator;
      this.offerList.sort = this.sort;
    });
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
