import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-teacher-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher-navbar.component.html',
  styleUrl: './teacher-navbar.component.css'
})
export class TeacherNavbarComponent implements OnInit {
  currentUserName: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the currentUser observable to get the user's name
    this.authService.currentUser$.subscribe(user => {
      this.currentUserName = user ? user.name : null;
      // console.log("Current User Name:", this.currentUserName);
    });
  }

  onLogoff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
