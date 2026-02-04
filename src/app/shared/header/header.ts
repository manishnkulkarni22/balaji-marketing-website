import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMenuOpen = false;
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  goToContact() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  }

  
@HostListener('window:scroll')
onScroll() {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}
}
