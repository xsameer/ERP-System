import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar.component";
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, AdminNavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
