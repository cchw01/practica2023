import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    productList:[this.offer?.productList],
    discountPercent:[this.offer?.discountPercent],
    startDate:[this.offer?.startDate],
    endDate:[this.offer?.endDate],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private offerAdmin: OfferAdminService
  ) {
    this.AddOfferForm = this.fb.group({
      productList:[this.offer?.productList],
      discountPercent:[this.offer?.discountPercent],
      startDate:[this.offer?.startDate],
      endDate:[this.offer?.endDate],
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