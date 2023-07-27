import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from './services/table';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  getTableById(id?: string): Observable<Table> {
    return this.http.get<Table>('http://localhost:80/table/' + id);
  }
}
