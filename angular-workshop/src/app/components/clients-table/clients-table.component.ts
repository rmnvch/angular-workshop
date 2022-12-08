import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client-service.service';
import { IClient } from 'src/app/types/interfaces';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit{
  clients: [] | IClient[]
  constructor(private ClientService: ClientService) {}

  ngOnInit(): void {
    this.ClientService.getClients()
      .subscribe((data: IClient[]) => this.clients = data)
  }
}
