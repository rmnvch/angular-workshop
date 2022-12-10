import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client-service.service';
import { DialogService } from 'src/app/services/dialog.service';
import { IClient, IFormData } from 'src/app/types/interfaces';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  contactOptions: Array<string> = ['phone', 'email', 'viber', 'telegram']
  defaultValue = 'phone'
  @Output() clientAdded = new EventEmitter<IClient>();
  clientForm = this.formBuilder.group({
    lastname: ['',[Validators.required, Validators.minLength(2)]],
    name: ['',[Validators.required, Validators.minLength(2)]],
    middlename: [''],
    contacts: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder, public ClientService: ClientService, private DialogService: DialogService ) {}

  onSubmit() {
    this.ClientService.addClient(this.clientForm.value as IFormData).subscribe((data) => {
      this.clientAdded.emit(data);
      this.DialogService.toggleDialog();
    })
  }

  get lastname() { return this.clientForm.get('lastname'); }
  get name() { return this.clientForm.get('name'); }
  get middlename() { return this.clientForm.get('middlename'); }

  get contacts() {
    return this.clientForm.get('contacts') as FormArray;
  }


  addContact() {
    if (this.contacts.length === 5) {
      return;
    }
    const contactForm = this.formBuilder.group({
      type: [this.defaultValue, Validators.required],
      value: ['', Validators.required],
    });
    this.contacts.push(contactForm);
  }
}
