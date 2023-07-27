import { Injectable } from '@angular/core';
import { OfferService } from './offer.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfferAdminService {
  offerList?: Array<OfferService>;

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>('http://localhost:80/offer');
  }

  updateOffer(offer: OfferService, id: any): void {
    const body = {
      _id: id,
      productList: offer.productList,
      discountPercent: offer.discountPercent,
      startDate: offer.startDate,
      endDate: offer.endDate,
    };
    this.http.put<any>('http://localhost:80/offer/' + id, body).subscribe();
  }
  getOfferById(id?: string): Observable<OfferService> {
    return this.http.get<OfferService>('http://localhost:80/offer/' + id);
  }
  deleteOffer(id?: string) {
    return this.http
      .delete<OfferService>('http://localhost:80/offer/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
  addOffer(offer: OfferService) {
    this.http
      .post<OfferService>('http://localhost:80/offer/', offer)
      .subscribe(() => {
        console.log('Add successful');
      });
  }
}
