import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client-service.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  title = 'Delete Client';
  constructor(public DialogService: DialogService, public ClientService: ClientService) {}

  onDelete(): void {
    if (this.DialogService.id) {
      this.ClientService.deleteClient(this.DialogService.id)
    }
  }
}
