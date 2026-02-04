import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PackageItem } from '../../models/package.model';


@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './package-card.html',
  styleUrl: './package-card.css',
})
export class PackageCard {
  @Input() package!: PackageItem;
   @Input() showTags = false; 

  get whatsappLink(): string {
    const message =
      `Hello, I am interested in the ${this.package.name}. ` +
      `Please share availability, pricing details, and next steps.`;

    return `https://wa.me/918263986909?text=${encodeURIComponent(message)}`;
  }


  // ✅ NEW: Limit services to 3 for card consistency
  get visibleServices(): string[] {
    return this.package.services.slice(0, 3);
  }

  // ✅ NEW: Show hint if more services exist
  get hasMoreServices(): boolean {
    return this.package.services.length > 3;
  }
}
