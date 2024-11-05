import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}
  currentUserName: string | null = null;

  ngOnInit() {
    // Subscribe to the currentUser observable to get the user's name
    this.authService.currentUser$.subscribe(user => {
      this.currentUserName = user ? user.name : null;
      // console.log("Current User Name:", this.currentUserName);
    });
  }

  isExpanded = false;

  expand() {
    this.isExpanded = true;
  }

  collapse() {
    this.isExpanded = false;
  }

}
