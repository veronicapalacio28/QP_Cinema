import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEmailService {
  private userEmail: string = '';

  constructor() { }

  setUserEmail(email: string): void {
    this.userEmail = email;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
}
