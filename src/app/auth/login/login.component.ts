import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
  
      this.router.navigate(['/dashboard']);
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}
