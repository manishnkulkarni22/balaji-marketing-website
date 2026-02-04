import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name = '';
  phone = '';
  message = '';

  submitForm() {
    if (!this.name || !this.phone) {
      return;
    }

    const message =
      `Name: ${this.name}\n` +
      `Phone: ${this.phone}\n` +
      `Message: ${this.message}`;

    const whatsappUrl =
      `https://wa.me/918263986909?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}
