import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private baseUrl = 'http://localhost:8080/api';
  private backendUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/register`, user);
  }
  
  // Define additional methods as needed
  getMessage(): Observable<any> {
    return this.http.get(`${this.backendUrl}/message`);
  }

  // login(email: string, password: string): Observable<any> {
  //   const loginData = { email, password };
  //   return this.http.post(`${environment.apiUrl}/login`, loginData);
  // }
  
}
