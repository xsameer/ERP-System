import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  currentUserName: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the currentUser observable to get the user's name
    this.authService.currentUser$.subscribe(name => {
      this.currentUserName = name;
      // console.log("Current User Name:", this.currentUserName);
    });
  }

  onLogoff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  

}
