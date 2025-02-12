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
    sessionStorage.removeItem('token');
    alert('Logout Successfully!');
    this._router.navigateByUrl('/login');
  }
}
