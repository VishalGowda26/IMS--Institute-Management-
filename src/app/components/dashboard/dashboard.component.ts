import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private _router: Router) {}
  logout() {
    if (confirm('Are you sure to Logout?')) {
      sessionStorage.removeItem('token');
      alert('🙄 Come Back Soon!');
      this._router.navigateByUrl('/login');
    } 
  }
}
