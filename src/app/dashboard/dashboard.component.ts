//   imports: [CommonModule, NavbarComponent, SidenavComponent],
//   styleUrl: './dashboard.component.css'
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'University ERP Dashboard';
}
