import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = ''; 
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    if (this.email && this.password && this.password === this.confirmPassword) {
      this.router.navigate(['/login']);
    } else {
      alert('Please ensure all fields are filled out correctly and passwords match.');
    }
  }
}
