import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { FbAuthResponse } from 'src/app/environment/inteface';
import { User } from 'src/app/shared/inteface';

@Injectable()
export class AuthService {
  get token(): string {
    return '';
  }
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
        user
      )
      .pipe(tap(this.setToken));
  }

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(res: any) {
    console.log(res);
  }
}
