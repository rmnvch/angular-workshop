import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class ClientFormComponent implements OnInit {
  contactOptions: Array<string> = ['phone', 'email', 'viber', 'telegram']
  defaultValue = 'phone'
  submitBtn: string
  clientForm = this.formBuilder.group({
    lastname: ['',[Validators.required, Validators.minLength(2)]],
    name: ['',[Validators.required, Validators.minLength(2)]],
    middlename: [''],
    contacts: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder, public ClientService: ClientService, private DialogService: DialogService ) {
    this.submitBtn = this.DialogService.id ? 'Update' : 'Create';
  }

  onSubmit() {
    if (this.DialogService.id) {
      this.ClientService.updateClient(this.clientForm.value as IFormData, this.DialogService.id)
    } else {
      this.ClientService.addClient(this.clientForm.value as IFormData)
    }
  }

  ngOnInit(): void {
    if (this.DialogService.id) {
      this.ClientService.getClientById(this.DialogService.id)
        .subscribe((data) => {
          this.clientForm.controls.lastname.setValue(data.lastname);
          this.clientForm.controls.name.setValue(data.name);
          this.clientForm.controls.middlename.setValue(data.middlename || '');
          data.contacts.forEach((contact) => {
            this.addContact(contact)
          })
        })
    }
  }
  

  get lastname() { return this.clientForm.get('lastname'); }
  get name() { return this.clientForm.get('name'); }
  get middlename() { return this.clientForm.get('middlename'); }

  get contacts() {
    return this.clientForm.get('contacts') as FormArray;
  }


  addContact(contact?: {type: string, value: string}) {
    if (this.contacts.length === 5) {
      return;
    }
    const contactForm = this.formBuilder.group({
      type: [contact?.type ||this.defaultValue, Validators.required],
      value: [contact?.value || '', Validators.required],
    });
    this.contacts.push(contactForm);
  }
}
