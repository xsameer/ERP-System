import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private backendUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/register`, user);
  }

  // trying api
  getMessage(): Observable<any> {
    return this.http.get(`${this.backendUrl}/message`);
  }


  // api.service.ts
  getAllSubjects(): Observable<any> {
    return this.http.get(`${this.backendUrl}/subjects`);
  }

  // getSubjects(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.backendUrl}/subjects`);
  // }

  // login(email: string, password: string): Observable<any> {
  //   const loginData = { email, password };
  //   return this.http.post(`${environment.apiUrl}/login`, loginData);
  // }

}
