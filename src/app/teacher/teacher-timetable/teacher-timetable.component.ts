import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";

@Component({
  selector: 'app-teacher-timetable',
  standalone: true,
  imports: [TeacherNavbarComponent],
  templateUrl: './teacher-timetable.component.html',
  styleUrl: './teacher-timetable.component.css'
})
export class TeacherTimetableComponent {

}
