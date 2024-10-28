import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // Add CommonModule if you plan to use common directives
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrected the property name
})
export class DashboardComponent {
  title = 'University ERP Dashboard';
}
