import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";

@Component({
  selector: 'app-teacher-gradebook',
  standalone: true,
  imports: [TeacherNavbarComponent],
  templateUrl: './teacher-gradebook.component.html',
  styleUrl: './teacher-gradebook.component.css'
})
export class TeacherGradebookComponent {

}
