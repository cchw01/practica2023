import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/app-logic/services/offer.service';
import { OfferAdminService } from 'src/app/app-logic/services/offer-admin.service';

@Component({
  selector: 'app-add-offer-admin',
  templateUrl: './add-offer-admin.component.html',
  styleUrls: ['./add-offer-admin.component.css'],
})
export class AddOfferAdminComponent implements OnInit {
  offer?: OfferService;
  AddOfferForm!: FormGroup;
  ngOnInit(): void {
    this.AddOfferForm = this.fb.group({
      productList: new FormArray([new FormControl(null, Validators.required)]),
      discountPercent: [this.offer?.discountPercent, Validators.required],
      startDate: [this.offer?.startDate, Validators.required],
      endDate: [this.offer?.endDate, Validators.required],
    });
  }

  get productListLength() {
    const productListFormArray = this.AddOfferForm.get(
      'productList'
    ) as FormArray;
    return productListFormArray.length;
  }

  addProduct() {
    (<FormArray>this.AddOfferForm.get('productList')).push(
      new FormControl(null, Validators.required)
    );
  }

  removeProduct() {
    const len = this.productListLength;
    (<FormArray>this.AddOfferForm.get('productList')).removeAt(len - 1);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private offerAdmin: OfferAdminService
  ) {
    this.AddOfferForm = this.fb.group({
      //productList: [this.offer?.productList, Validators.required],
      productList: new FormArray([new FormControl(null, Validators.required)]),
      discountPercent: [this.offer?.discountPercent, Validators.required],
      startDate: [this.offer?.startDate, Validators.required],
      endDate: [this.offer?.endDate, Validators.required],
    });
  }

  OnSubmit(): void {
    this.offer = new OfferService(this.AddOfferForm.value);
    this.offerAdmin.addOffer(this.offer);
    this.redirectToMainPage();
  }
  redirectToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/offer-admin']);
    }, 1000);
  }
}
