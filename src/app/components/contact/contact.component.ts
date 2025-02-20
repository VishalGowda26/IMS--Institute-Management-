import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact: any = {
    name: '',
    email: '',
    message: '',
  };
  onSubmit(): void {
    console.log('Form submitted:', this.contact);
    alert('Thank you for your message!');
  }
}
