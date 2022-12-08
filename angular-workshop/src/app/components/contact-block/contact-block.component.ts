import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss']
})
export class ContactBlockComponent {
@Input() contactList: Array<{[K: string]: string}> = []
}
