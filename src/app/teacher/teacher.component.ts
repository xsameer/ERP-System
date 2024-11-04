import { Component } from '@angular/core';
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [TeacherDashboardComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

}
