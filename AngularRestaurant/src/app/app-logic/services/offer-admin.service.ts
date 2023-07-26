import { Injectable } from '@angular/core';
import { OfferService } from './offer.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfferAdminService {
  userList?: Array<OfferService>;

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>('http://localhost:80/offer');
  }

  updateUser(offer: OfferService, id: any): void {
    const body = {
      _id: id,
      productList:offer.productList,
      discountPercent:offer.discountPercent,
      startDate:offer.startDate,
      endDate:offer.endDate,
    };
    this.http.put<any>('http://localhost:80/user/', body).subscribe();
  }
  getOfferById(id?: string): Observable<OfferService> {
    return this.http.get<OfferService>('http://localhost:80/user/' + id);
  }
  deleteUser(id?: string) {
    return this.http
      .delete<OfferService>('http://localhost:80/user/' + id)
      .subscribe(() => console.log('Delete successful'));
  }
  addUser(offer: OfferService) {
    this.http.post<OfferService>('http://localhost:80/user/', offer).subscribe();
  }
}