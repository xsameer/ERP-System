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
  private localStorageKey = 'currentUser';

  private currentUserSubject = new BehaviorSubject<{ userId: number, name: string } | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem(this.localStorageKey);
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
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
        if (response && response.userId && response.name) {
          const currentUser = { userId: response.userId, name: response.name };
          this.currentUserSubject.next(currentUser);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(currentUser));
          }
        }
      })
    );
  }

  logout() {
    this.currentUserSubject.next(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.localStorageKey);
    }
  }

  getCurrentUserId(): number | null {
    return this.currentUserSubject.value?.userId ?? null;
  }
}
