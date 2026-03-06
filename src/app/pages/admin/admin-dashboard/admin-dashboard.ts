import { Component } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestorePackageService } from '../../../services/firebase-package.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

  name = '';
  location = '';
  priceNote = '';

  constructor(
    private router: Router,
    private packageService: FirestorePackageService
  ) {}

  logout() {

    const auth = getAuth();

    signOut(auth).then(() => {

      alert("Logged out");

      this.router.navigate(['/admin-login']);

    });

  }

  addPackage() {

    const newPackage = {
      name: this.name,
      location: this.location,
      priceNote: this.priceNote
    };

    this.packageService.addPackage(newPackage as any)
      .then(() => {

        alert("Package Added Successfully");

        // optional reset
        this.name = '';
        this.location = '';
        this.priceNote = '';

      })
      .catch(err => console.log(err));

  }

}
