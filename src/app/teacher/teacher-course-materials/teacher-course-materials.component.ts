import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";

@Component({
  selector: 'app-teacher-course-materials',
  standalone: true,
  imports: [TeacherNavbarComponent],
  templateUrl: './teacher-course-materials.component.html',
  styleUrl: './teacher-course-materials.component.css'
})
export class TeacherCourseMaterialsComponent {

}
