import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IClient, IFormData } from '../types/interfaces';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://localhost:3000/clients"

  constructor(private http: HttpClient, private DialogService: DialogService) { }

  public clientsList = new Subject<IClient[]>(); 

  getClients (): void {
    this.http.get<IClient[]>(this.baseURL).subscribe((data) => this.clientsList.next(data));
  }

  getClientById (id: number): Observable<IClient> {
    return this.http.get<IClient>(`${this.baseURL}/${id}`)
  }

  addClient(data: IFormData): void {
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
    this.http.post<IClient>(this.baseURL, newBody, httpOptions).subscribe(() => {
      this.getClients()
      this.DialogService.toggleDialog();
    });
  }

  updateClient(data: IFormData, id: number): void {
    const newBody = {
      ...data,
      modifiedAt: Date.now(),
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    }
    this.http.patch<IClient>(`${this.baseURL}/${id}`, newBody, httpOptions).subscribe(() => {
      console.log(data)
      this.getClients()
      this.DialogService.toggleDialog();
    });
  }

  deleteClient(id: number) {
    this.http.delete<IClient>(`${this.baseURL}/${id}`).subscribe(() => {
      this.getClients()
      this.DialogService.toggleDialog();
    });
  }
}
