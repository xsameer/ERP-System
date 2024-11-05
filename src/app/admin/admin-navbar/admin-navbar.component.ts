import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit {
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
