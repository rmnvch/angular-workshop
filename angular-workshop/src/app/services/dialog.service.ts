import { Injectable } from '@angular/core';
import { ModalTypes } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isDialogOpen = false;
  type: ModalTypes;
  id: number | null;
  constructor() { }

  toggleDialog(type?: ModalTypes, id?: number ) {
    this.isDialogOpen = !this.isDialogOpen
    if(type) {
      this.type = type;
    } 
    if (id) {
      this.id = id as number;
    } else {
      this.id = null
    }

  }
}
