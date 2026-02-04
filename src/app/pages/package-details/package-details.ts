import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageItem } from '../../models/package.model';
import { PACKAGES } from '../../data/package.data';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-package-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-details.html',
  styleUrl: './package-details.css',
})
export class PackageDetails {

  package?: PackageItem;

  constructor(
  private route: ActivatedRoute,
  private title: Title,
  private meta: Meta
) {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.package = PACKAGES.find(p => p.id === id);

  if (this.package) {
    this.title.setTitle(
      `${this.package.name} | Darshan Package`
    );

    this.meta.updateTag({
      name: 'description',
      content: `Book ${this.package.name}. ${this.package.priceNote}. Includes darshan, travel, and accommodation.`
    });
  }
}
}
