import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { IClient } from 'src/app/types/interfaces';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss']
})
export class ClientDialogComponent {
  title: string
  constructor(public DialogService: DialogService) {
    this.title = this.DialogService.id ? 'Edit Client' : 'New Client'
  }
}