import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { StickyCta } from './shared/sticky-cta/sticky-cta';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, StickyCta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @HostListener('window:scroll', [])
  onScroll(): void {
    const cta = document.getElementById('stickyCta');
    if (!cta) return;

    if (window.scrollY > 100) {
      cta.classList.add('show');
      cta.classList.remove('hidden');
    } else {
      cta.classList.add('hidden');
      cta.classList.remove('show');
    }
  }
}
