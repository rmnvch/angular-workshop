import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IClient, IFormData } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://localhost:3000/clients"

  constructor(private http: HttpClient) { }

  public addedUser = new Observable();

  getClients (): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.baseURL);
  }

  addClient(data: IFormData): Observable<IClient> {
    const newBody = {
      ...data,
      createdAt: Date.now(),
      modifiedAt: Date.now(),
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    }
    return this.http.post<IClient>(this.baseURL, newBody, httpOptions);
  }

  deleteClient(id: number) {
    return this.http.delete<IClient>(`${this.baseURL}/${id}`);
  }
}
