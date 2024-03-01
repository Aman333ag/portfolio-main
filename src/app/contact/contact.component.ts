import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail() {
    const name = (<HTMLInputElement>document.getElementById('identite')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    const message = (<HTMLTextAreaElement>document.getElementById('comment')).value;

    const mailtoLink = `mailto:guptaaman333.ag@gmail.com?subject=Contact%20Form%20[PORTFOLIO]&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  }
}
