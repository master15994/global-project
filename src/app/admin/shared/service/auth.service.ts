import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/inteface';

@Injectable()
export class AuthService {
  get token(): string {
    return '';
  }
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post('', user);
  }

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken() {}
}
