import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IClient } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://localhost:3000/clients"

  constructor(private http: HttpClient) { }

  getClients (): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.baseURL);
  }
}
