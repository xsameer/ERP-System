import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private backendUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<any> {
    return this.http.get(`${this.backendUrl}/subjects`);
  }

  applyForSubject(subjectId: number, registration: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/subjects/${subjectId}/apply`, registration);
  }

  cancelSubjectRegistration(subjectId: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/subjects/${subjectId}/cancel`);
  }

  getMessage(): Observable<any> {
    return this.http.get(`${this.backendUrl}/message`);
  }

  // New methods for admin functionality
  getPendingRegistrations(): Observable<any> {
    return this.http.get(`${this.backendUrl}/registrations/pending`);
  }

  approveRegistration(id: number): Observable<any> {
    return this.http.put(`${this.backendUrl}/registrations/approve/${id}`, {});
  }

  // New method to get approved registrations
  getApprovedRegistrations(): Observable<any> {
    return this.http.get(`${this.backendUrl}/registrations/approved`);
  }
}
