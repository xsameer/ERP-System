import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validEmail = 'sameer@gmail.com';
  private validPassword = 'sameer';

  login(email: string, password: string): boolean {
    return email === this.validEmail && password === this.validPassword;
  }
}
