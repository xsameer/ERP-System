import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../shared/navbar.component";
import { SidenavComponent } from "../shared/sidenav.component";
import { ApiService } from '../services/api.service'; // Import your ApiService

@Component({
  selector: 'app-subject-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, SidenavComponent],
  templateUrl: './subject-registration.component.html',
  styleUrl: './subject-registration.component.css'
})
export class SubjectRegistrationComponent implements OnInit {
cancelSubject(_t12: any) {
throw new Error('Method not implemented.');
}
applySubject(_t12: any) {
throw new Error('Method not implemented.');
}
  subjectForm: FormGroup;
  subjects: any[] = []; // Initialize as an empty array

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.pattern('[A-Z]{3}[0-9]{3}')]],
      description: ['', [Validators.maxLength(200)]],
      credits: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      instructor: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchSubjects(); // Fetch subjects on component initialization
  }

  fetchSubjects() {
    this.apiService.getAllSubjects().subscribe(
      (data) => {
        this.subjects = data; // Assign the response data to subjects
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      console.log('Form Submitted:', this.subjectForm.value);
    }
  }
}
