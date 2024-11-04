import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-admin-course-management',
  standalone: true,
  imports: [AdminNavbarComponent],
  templateUrl: './admin-course-management.component.html',
  styleUrl: './admin-course-management.component.css'
})
export class AdminCourseManagementComponent {

}
