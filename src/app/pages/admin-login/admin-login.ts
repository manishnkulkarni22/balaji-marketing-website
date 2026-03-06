import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLoginComponent {

  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {

    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {

        console.log("Admin Logged In", userCredential.user);

        alert("Login Successful");

        // redirect to dashboard
        this.router.navigate(['/admin-dashboard']);

      })
      .catch((error) => {

        alert("Login Failed");

        console.log(error);

      });

  }

}
