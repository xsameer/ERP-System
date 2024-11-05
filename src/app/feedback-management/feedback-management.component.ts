import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-management.component.html',
  styleUrl: './feedback-management.component.css'
})
export class FeedbackManagementComponent implements OnInit{
  feedbackData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchFeedback();
  }

  fetchFeedback() {
    this.apiService.getMessage().subscribe({
      next: (data: any) => (this.feedbackData = data),
      error: (error) => console.error('Error fetching feedback:', error)
    });
  }
}
