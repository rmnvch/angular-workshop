import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  contactOptions: Array<string> = ['phone', 'email', 'viber', 'telegram']
  defaultValue = 'phone'
  clientForm = this.formBuilder.group({
    lastname: ['', Validators.required],
    name: ['', Validators.required],
    middlename: [''],
    contacts: this.formBuilder.array([
    ])
  })

  constructor(private formBuilder: FormBuilder ) {}

  onSubmit() {
    console.log(this.clientForm.value);
  }

  get contacts() {
    return this.clientForm.get('contacts') as FormArray;
  }


  addContact() {
    const contactForm = this.formBuilder.group({
      type: [this.defaultValue, Validators.required],
      value: ['', Validators.required],
    });
    this.contacts.push(contactForm);
  }
}
