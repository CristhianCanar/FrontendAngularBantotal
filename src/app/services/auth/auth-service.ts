import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../../models/auth/auth-request.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../models/auth/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(request: AuthRequest): Observable<AuthResponse> {

    const url = `${this.baseUrl}/auth/login`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post<AuthResponse>(url, request, { headers });
  }
}
