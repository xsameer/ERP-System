import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";

@Component({
  selector: 'app-teacher-feedback',
  standalone: true,
  imports: [TeacherNavbarComponent],
  templateUrl: './teacher-feedback.component.html',
  styleUrl: './teacher-feedback.component.css'
})
export class TeacherFeedbackComponent {

}
