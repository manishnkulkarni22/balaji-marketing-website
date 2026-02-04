import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PackageCard } from '../../shared/package-card/package-card';
import { PackageItem } from '../../models/package.model';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-packages',
  imports: [PackageCard, NgFor, NgIf],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {

  
  selectedLocation: 'All' | 'Tirupati' | 'Ujjain' = 'All';

  
constructor(
  private title: Title,
  private meta: Meta
) {
  this.title.setTitle('Darshan Packages | Tirupati & Ujjain Yatra');

  this.meta.updateTag({
    name: 'description',
    content:
      'Book Tirupati Balaji and Ujjain Mahakal darshan packages with travel, stay, and VIP darshan options. Trusted spiritual tour packages.'
  });
}

  packages: PackageItem[] = [
    {                           //Tirupati Standard Darshan Package
      id: 1,
      name: 'Tirupati Standard Darshan Package',
      location: 'Tirupati',
      type: 'Package',
      services: [
        'Two way Non AC Sleeper Class Railway Tickets',
        'Darshan Pass for balaji temple',
        'Accomodation for 1 day in Tirumala',
      ],
      priceNote: 'Starting from ₹3500 per person',
      idealFor: 'First-time darshan, families, Groups travellers',
      image: 'assets/images/standardTirupati.jpg',
      tags: ['Top Seller', 'Public Favorite']
      //discountNote: 'Family and group discounts available'
    },
    {                           //Ujjain Standard Darshan Package
      id: 2,
      name: 'Ujjain Standard Darshan Package',
      location: 'Ujjain',
      type: 'Package',
      services: [
        'Two way Non AC Sleeper Class Railway Tickets',
        'Sheeghra Darshan Pass for Mahakal Temple',
        'Accomodation for 1 day in Hotel Room'
      ],
      priceNote: 'Starting from ₹3000 per person',
      idealFor: 'Spiritual seekers, group travellers, families',
      image: 'assets/images/standardUjjain.png'
    },
    {                           //Custom Tour Package
      id: 3,
      name: 'Custom Tour Package',
      location: 'Custom',
      type: 'Custom',
      services: [
        'Customized itinerary',
        'Personal assistance'
      ],
      priceNote: 'Contact us for pricing',
      idealFor: 'All',
      image: 'assets/images/customTour.jpg',
      discountNote: 'Discounts available for large group bookings.',
    },
    {                           //Tirupati Comfort Darshan Package                          
      id: 4,
      name: 'Tirupati Comfort Darshan Package',
      location: 'Tirupati',
      type: 'Package',
      services: [
        'Two Way Railway Tickets for 3 Tier AC Class',
        'Darshan Pass for balaji temple',
        'Accomodation for 1 day in Tirumala'
      ],
      priceNote: 'Starting from ₹5,500 per person',
      idealFor: 'Working professionals, family',
      image: 'assets/images/comfortTirupati.jpg',
      tags: ['Trending']
    }, 
    {                           //Tirupati Premium Darshan Package
      id: 5,
      name: 'Tirupati Premium Darshan Package',
      location: 'Tirupati',
      type: 'Package',
      services: [
        'Two way Railway Tickets for 2 Tier AC Class',
        'Darshan Pass for balaji temple',
        'Accomodation for 1 day in Tirumala'
      ],
      priceNote: 'Starting from ₹7,500 per person',
      idealFor: 'Senior Citizens, Family, Working professionals',
      image: 'assets/images/premiumTirupati.jpg'
    },
    {                           //Tirupati Flight Darshan Package
      id: 6,
      name: 'Tirupati Flight Darshan Package',
      location: 'Tirupati',
      type: 'Package',
      services: [
        'Two way Flight Tickets',
        'Darshan Pass for balaji temple',
        'Accomodation for 1 day in Tirumala/Tirupati'
      ],
      priceNote: 'Starting from ₹18,500 per person',
      idealFor: 'Senior Citizens, Working professionals, limited-time visitors, family',
      image: 'assets/images/flightTirupati.jpg'
    },
    {                           //Summer Vacation special Tirupati Darshan Package
      id: 7,
      name: 'Summer Vacation special Tirupati Darshan Package',
      location: 'Tirupati',
      type: 'Package',
      services: [
        'All-Inclusive 3-Tier AC Transportation',
        'Premium Stay & Darshan Pass',
        'Local Sightseeing and Complete Amenity Package',
      ],
      priceNote: 'Starting from ₹15,000 per person',
      idealFor: 'Senior citizens, Working professionals and Family',
      image: 'assets/images/summerTirupati.jpg'
    },
    {                           //Tirupati Balaji Darshan Pass
      id: 8,
      name: 'Tirupati Balaji Darshan Pass',
      location: 'Tirupati',
      type: 'Darshan Only',
      services: [
        'Darshan Pass for balaji temple',
      ],
      priceNote: 'Starting from ₹1200 per person',
      idealFor: 'All',
      image: 'assets/images/darshanTirupati.jpg'
    },
    {                           //Tirupati VIP Break Darshan Pass
      id: 9,
      name: 'Tirupati VIP Break Darshan Pass',
      location: 'Tirupati',
      type: 'Darshan Only',
      services: [
        'VIP Darshan Break Darshan pass'
      ],
      priceNote: 'Starting from ₹12,500 per person',
      idealFor: 'Senior Citizens, Working professionals, limited-time visitors',
      image: 'assets/images/vipDarshanTirupati.jpg'
    },
    {                           //Ujjain Comfort Darshan Package
      id: 10,
      name: 'Ujjain Comfort Darshan Package',
      location: 'Ujjain',
      type: 'Package',
      services: [
        'Two Way Railway Tickets for 3 Tier AC Class',
        'Sheeghra Darshan Pass for Mahakal Temple',
        'Accomodation for 1 day in Hotel Room'
      ],
      priceNote: 'Starting from ₹5,000 per person',
      idealFor: 'Working professionals, Family',
      image: 'assets/images/comfortUjjain.png'
    },
    {                           //Ujjain Premium Darshan Package
      id: 11,
      name: 'Ujjain Premium Darshan Package',
      location: 'Ujjain',
      type: 'Package',
      services: [
        'Two Way Railway Tickets for 2 Tier AC Class',
        'Sheeghra Darshan Pass for Mahakal Temple',
        'Accomodation for 1 day in Hotel Room'
      ],
      priceNote: 'Starting from ₹7,000 per person',
      idealFor: 'Senior Citizens, Working professionals and Family',
      image: 'assets/images/premiumUjjain.png'
    },
    {                           //Ujjain Flight Darshan Package
      id: 12,
      name: 'Ujjain Flight Darshan Package',
      location: 'Ujjain',
      type: 'Package',
      services: [
        'Two way Flight Tickets',
        'Darshan Pass for mahakal temple',
        'Premium Accomodation for 1 day in Ujjain'
      ],
      priceNote: 'Starting from ₹17,500 per person',
      idealFor: 'Senior Citizens, Working professionals and Family',
      image: 'assets/images/flightUjjain.jpg'
    },
    {                           //Ujjain Sheeghra Darshan Pass
      id: 13,
      name: 'Ujjain Sheeghra Darshan Pass',
      location: 'Ujjain',
      type: 'Darshan Only',
      services: [
        'Sheeghra Darshan Pass for Mahakal temple',
      ],
      priceNote: 'Starting from ₹300 per person',
      idealFor: 'All',
      image: 'assets/images/darshanUjjain.png'
    },
    {                           //Ujjain + Omkareshwar Temple Sheeghra Darshan Pass
      id: 14,
      name: 'Ujjain + Omkareshwar Temple Sheeghra Darshan Pass',
      location: 'Ujjain',
      type: 'Darshan Only',
      services: [
        'Sheeghra Darshan Pass for Mahakal and Omkareshwar temple'
      ],
      priceNote: 'Starting from ₹800 per person',
      idealFor: 'All',
      image: 'assets/images/ujjainOmkarDarshan.png'
    }
  ];
  get filteredPackages(): PackageItem[] {
    if (this.selectedLocation === 'All') {
      return this.packages;
    }
    return this.packages.filter(
      pkg => pkg.location === this.selectedLocation
    );
  }

  // ✅ Empty state check (USED in template)
  get isEmpty(): boolean {
    return this.filteredPackages.length === 0;
  }

  // ✅ Filter button handler
  setFilter(location: 'All' | 'Tirupati' | 'Ujjain') {
    this.selectedLocation = location;
  }


}


