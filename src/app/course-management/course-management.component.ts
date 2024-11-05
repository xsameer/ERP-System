import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarComponent } from "../shared/navbar.component";

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css'
})
export class CourseManagementComponent {
  approvedRegistrations: any[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadApprovedRegistrations();
  }

  loadApprovedRegistrations() {
    this.apiService.getApprovedRegistrations().subscribe(
      (data) => {
        this.approvedRegistrations = data;
      },
      (error) => {
        console.error('Error fetching approved registrations:', error);
        this.showNotification('Failed to load approved registrations.');
      }
    );
  }

  showNotification(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
