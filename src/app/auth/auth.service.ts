import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:8080/api/register';
  private loginUrl = 'http://localhost:8080/api/login';
  private localStorageKey = 'currentUserName'; // Key for localStorage

  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    // Retrieve user name from localStorage only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const storedUserName = localStorage.getItem(this.localStorageKey);
      if (storedUserName) {
        this.currentUserSubject.next(storedUserName);
      }
    }
  }

  register(userData: any): Observable<any> {
    return this.http.post(this.backendUrl, userData);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(this.loginUrl, loginData).pipe(
      tap((response) => {
        if (response && response.name) {
          this.currentUserSubject.next(response.name); // Set the logged-in user's name
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.localStorageKey, response.name); // Save to localStorage
          }
        }
      })
    );
  }

  logout() {
    this.currentUserSubject.next(null); // Clear user on logout
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.localStorageKey); // Remove from localStorage
    }
  }
}
