import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  constructor(private router: Router, public auth: AuthService) {}

  logout(event: Event) {
    event.preventDefault();
    this.router.navigate(['/admin', 'login']);
  }
}
