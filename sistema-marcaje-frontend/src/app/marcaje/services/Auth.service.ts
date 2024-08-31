import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://3.133.145.220:8080/sistema-marcaje-backend/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); 
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
