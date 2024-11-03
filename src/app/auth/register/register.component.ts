import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subject, catchError, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    if (this.email && this.password && this.password === this.confirmPassword) {
      const userData = {
        name: this.name, // Now matches backend expected name
        email: this.email,
        password: this.password,
      };
      
      this.authService
        .register(userData)
        .pipe(
          takeUntil(this.destroy$),
          tap((response) => {
            console.log('Registration successful:', response);
            this.router.navigate(['/login']);
          }),
          catchError((error) => {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
            return of(null);
          })
        )
        .subscribe();
      
    } else {
      alert('Please ensure all fields are filled out correctly and passwords match.');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
