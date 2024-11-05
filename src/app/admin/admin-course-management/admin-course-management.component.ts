import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-course-management',
  standalone: true,
  imports: [AdminNavbarComponent,CommonModule,FormsModule],
  templateUrl: './admin-course-management.component.html',
  styleUrl: './admin-course-management.component.css'
})
export class AdminCourseManagementComponent implements OnInit {
  

  pendingRegistrations: any[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchPendingRegistrations();
  }

  fetchPendingRegistrations() {
    this.apiService.getPendingRegistrations().subscribe(
      (data) => {
        this.pendingRegistrations = data;
      },
      (error) => {
        console.error('Error fetching pending registrations:', error);
        this.showNotification('Failed to load pending registrations.');
      }
    );
  }

  approveRegistration(id: number) {
    this.apiService.approveRegistration(id).subscribe(
      (response) => {
        this.showNotification('Registration approved successfully.');
        this.fetchPendingRegistrations(); // Refresh the list
      },
      (error) => {
        console.error('Error approving registration:', error);
        this.showNotification('Failed to approve registration.');
      }
    );
  }

  showNotification(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }


}
