import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../shared/navbar.component";
import { SidenavComponent } from "../shared/sidenav.component";
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-subject-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, SidenavComponent],
  templateUrl: './subject-registration.component.html',
  styleUrls: ['./subject-registration.component.css']
})
export class SubjectRegistrationComponent implements OnInit {
  subjectForm: FormGroup;
  subjects: any[] = [];
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.pattern('[A-Z]{3}[0-9]{3}')]],
      description: ['', [Validators.maxLength(200)]],
      credits: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      instructor: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchSubjects();
  }

  fetchSubjects() {
    this.loading = true;
    this.apiService.getAllSubjects().subscribe(
      (data) => {
        this.subjects = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching subjects:', error);
        this.loading = false;
        this.showNotification('Failed to load subjects.');
      }
    );
  }

  applySubject(subject: any) {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      // Construct the registration object
      const registration = {
        student: { id: userId },
        subject: { id: subject.id },
        status: 'pending' // Set default status if needed
      };

      this.apiService.applyForSubject(subject.id, registration).subscribe(
        (response) => {
          this.showNotification('Successfully applied for the subject.');
          this.fetchSubjects();
        },
        (error) => {
          console.error('Error applying for subject:', error);
          this.showNotification('Failed to apply for the subject.');
        }
      );
    } else {
      this.showNotification('User ID not found. Please log in again.');
    }
  }

  cancelSubject(subject: any) {
    this.apiService.cancelSubjectRegistration(subject.id).subscribe(
      (response) => {
        this.showNotification('Successfully canceled the subject registration.');
        this.fetchSubjects();
      },
      (error) => {
        console.error('Error canceling subject registration:', error);
        this.showNotification('Failed to cancel the subject registration.');
      }
    );
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      console.log('Form Submitted:', this.subjectForm.value);
    }
  }

  showNotification(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
