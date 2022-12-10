import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client-service.service';
import { DialogService } from 'src/app/services/dialog.service';
import { IClient } from 'src/app/types/interfaces';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit{
  // clients: IClient[] = []
  clients: Observable<IClient[]>
  constructor(private ClientService: ClientService, public DialogService: DialogService) {}

  ngOnInit(): void {
    this.getTheUpdates()
    // this.ClientService.getClients()
    //   .subscribe((data: IClient[]) => this.clients = data)
  }


  getTheUpdates() {
    this.clients = this.ClientService.getClients();
  }

  onAddingClient(client: IClient) {
    console.log(client);
    this.getTheUpdates();
    // this.clients.push(client as IClient);
  }

  onDelete(id: number) {
    this.ClientService.deleteClient(id).subscribe(() => this.getTheUpdates());
    console.log(id)
      // .subscribe(() => this.clients = this.clients.filter((client) => client.id !== id))
  }
}
