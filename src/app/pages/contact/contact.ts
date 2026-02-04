import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  name = '';
  phone = '';
  message = '';
  showSuccess = false;

  submitForm() {
    if (!this.name || !this.phone) {
      return;
    }

    const text = `
🙏 Darshan Enquiry
Name: ${this.name}
Mobile: ${this.phone}
Message: ${this.message || 'NA'}
    `.trim();

    const whatsappUrl = `https://wa.me/918263986909?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    this.name = '';
    this.phone = '';
    this.message = '';

    this.showSuccess = true;
    setTimeout(() => (this.showSuccess = false), 3000);
  }
}
