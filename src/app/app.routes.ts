import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Packages } from './pages/packages/packages';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { PackageDetails } from './pages/package-details/package-details';
import { AdminDashboard } from './pages/admin/admin-dashboard/admin-dashboard';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },

  // 👇 MORE SPECIFIC ROUTE FIRST
  { path: 'packages/:id', component: PackageDetails },

  // 👇 GENERAL ROUTE AFTER
  { path: 'packages', component: Packages },

  { path: 'about', component: About },
  { path: 'contact', component: Contact },

  {
   path: 'admin-login',
  loadComponent: () => import('./pages/admin-login/admin-login')
 .then(m => m.AdminLoginComponent)
},
{ path: '', redirectTo: 'admin-login', pathMatch: 'full' },

  // { path: 'admin-login', component: AdminLoginComponent },

  { path: 'admin-dashboard', component: AdminDashboard }
];
