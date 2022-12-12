import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client-service.service';
import { DialogService } from 'src/app/services/dialog.service';
import { IClient, ModalTypes } from 'src/app/types/interfaces';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit{
  clients: IClient[] = []
  constructor(private ClientService: ClientService, public DialogService: DialogService) {
    ClientService.clientsList.subscribe((data) => this.clients = data);
  }

  ngOnInit(): void {
    this.ClientService.getClients();
  }
}
