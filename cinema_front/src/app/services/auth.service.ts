import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    const endpoint = `${this.apiUrl}/login`;
    return this.http.post(endpoint, { correo, contrasena });
  }

  register(userData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/register`;
    return this.http.post(endpoint, { userData });
  }

}
