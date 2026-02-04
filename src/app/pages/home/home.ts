import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PackageCard } from '../../shared/package-card/package-card';
import { PackageItem } from '../../models/package.model';
import { PackageService } from '../../services/package.service';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, PackageCard, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class Home implements OnInit, AfterViewInit, OnDestroy {
  constructor(private packageService: PackageService) { }
  packages: PackageItem[] = [];
  private cardWidth = 320;
  private autoScrollTimer: any;
  isPaused = false;
  private reviewAutoScrollTimer: any;
  currentHeroIndex = 0;
  heroInterval: any;

  @ViewChild('slider', { static: false })
  slider!: ElementRef<HTMLDivElement>;

  @ViewChild('reviewsSlider', { static: false }) reviewsSlider!: ElementRef<HTMLDivElement>;


  formData = {
    name: '',
    phone: '',
    package: '',
    message: ''
  };

  showSuccess = false;

reviews = [
  {
    name: 'Shantabai Kulkarni',
    avatar: 'assets/images/avatars/senior-femaleAvatar.jpg', // ✅ Avatar
    location: 'Pune • Senior Citizen',
    stars: '★★★★',
    comment: 'At our age, Tirupati darshan is not easy. Everything was arranged peacefully. Felt respected and safe throughout.',
    tag: 'Senior Citizen Darshan'
  },
  {
    name: 'Ramesh & Sunita Patil',
    avatar: 'assets/images/avatars/familyAvatar.jpg', // ✅ Avatar
    location: 'Kolhapur • Family',
    stars: '★★★★★',
    comment: 'Transparent pricing and honest guidance. No false promises. Entire family had smooth darshan.',
    tag: 'Family Package'
  },
  {
    name: 'Amit Joshi',
    avatar: 'assets/images/avatars/groupAvatar.jpg', // ✅ Avatar
    location: 'Mumbai • Group of 14',
    stars: '★★★★★',
    comment: 'Managing a big group is difficult, but everything was well planned. Highly recommended.',
    tag: 'Group Booking'
  },
  {
    name: 'Neha & Pratik Deshmukh',
    avatar: 'assets/images/avatars/coupleAvatar.jpg', // ✅ Avatar
    location: 'Nashik • Couple',
    stars: '★★★★',
    comment: 'Custom tour exactly as promised. Clear explanation and no hidden charges. Very professional.',
    tag: 'Custom Tour'
  },
  {
    name: 'Suresh Rao',
    avatar: 'assets/images/avatars/maleAvatar.jpg', // ✅ Avatar
    location: 'Bengaluru • First Visit',
    stars: '★★★★★',
    comment: 'First time visiting Tirupati. All doubts were cleared patiently. Very experienced team.',
    tag: 'First-Time Darshan'
  }
];
heroImages = [
  'assets/images/slideshowTirupathi3.jpg',
  'assets/images/slideshowTirupathi5.jpg',
  'assets/images/slideshowUjjain1.jpg',
  'assets/images/slideshowTiruathi1.jpg',
  'assets/images/slideshowTirupathi6.jpg',
  'assets/images/slideshowUjjain2.jpg', 
  'assets/images/slideshowTirupathi4.jpg',
  'assets/images/slideshowTirupati2.jpg',
  'assets/images/slideshowAyodhya1.jpg',
];
  ngOnInit() {
  this.packages = this.packageService
    .getPackages()
    .sort((a, b) => Number(b.featured) - Number(a.featured));
  this.startHeroSlideshow();
}
startHeroSlideshow() {
  this.heroInterval = setInterval(() => {
    this.currentHeroIndex++;
    if (this.currentHeroIndex >= this.heroImages.length) {
      this.currentHeroIndex = 0;
    }
  }, 5000); // Change every 5 seconds
}
  sendToWhatsApp() {
    const text = `
🙏 Darshan Enquiry
Name: ${this.formData.name}
Mobile: ${this.formData.phone}
Package: ${this.formData.package}
Message: ${this.formData.message || 'NA'}
    `.trim();

    const url = `https://wa.me/918263986909?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    this.formData = {
      name: '',
      phone: '',
      package: '',
      message: ''
    };

    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  ngAfterViewInit() {
  // wait for DOM to settle
   this.startReviewAutoScroll();
  setTimeout(() => {
    if (this.slider) {
      this.startAutoScroll();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      this.stopAutoScroll();
    } else {
      // resume safely
      setTimeout(() => {
        if (this.slider) {
          this.startAutoScroll();
        }
      });
    }
  });
   document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      this.stopReviewAutoScroll();
    } else {
      setTimeout(() => this.startReviewAutoScroll(), 500);
    }
  });
}
 startAutoScroll() {
  this.stopAutoScroll();
  this.autoScrollTimer = setInterval(() => {
    if (this.isPaused || !this.slider) return;

    const el = this.slider.nativeElement;
    el.scrollBy({ left: 320, behavior: 'smooth' });

    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 3000);
}
stopAutoScroll() {
  clearInterval(this.autoScrollTimer);
}
pauseAutoScroll() {
  this.isPaused = true;
}
resumeAutoScroll() {
  setTimeout(() => (this.isPaused = false), 2000);
}
slideLeft() {
  this.pauseAutoScroll();
  this.slider.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  this.resumeAutoScroll();
}
slideRight() {
  this.pauseAutoScroll();
  this.slider.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  this.resumeAutoScroll();
}
startReviewAutoScroll() {
  this.stopReviewAutoScroll();
  if (!this.reviewsSlider) return;

  const el = this.reviewsSlider.nativeElement;
  const cardWidth = el.querySelector('.review-card')?.clientWidth || 320;

  this.reviewAutoScrollTimer = setInterval(() => {
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });

    // Loop to start again
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 4500); // 4.5 seconds per card
}
stopReviewAutoScroll() {
  clearInterval(this.reviewAutoScrollTimer);
}
slideReviewLeft() {
  this.stopReviewAutoScroll();
  const el = this.reviewsSlider.nativeElement;
  const cardWidth = el.querySelector('.review-card')?.clientWidth || 320;
  el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  this.startReviewAutoScroll();
}
slideReviewRight() {
  this.stopReviewAutoScroll();
  const el = this.reviewsSlider.nativeElement;
  const cardWidth = el.querySelector('.review-card')?.clientWidth || 320;
  el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  this.startReviewAutoScroll();
}

ngOnDestroy() {
  this.stopAutoScroll();
  clearInterval(this.heroInterval);
}

}
