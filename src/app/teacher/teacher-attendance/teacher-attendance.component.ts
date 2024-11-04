import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";

@Component({
  selector: 'app-teacher-attendance',
  standalone: true,
  imports: [TeacherNavbarComponent],
  templateUrl: './teacher-attendance.component.html',
  styleUrl: './teacher-attendance.component.css'
})
export class TeacherAttendanceComponent {

}
