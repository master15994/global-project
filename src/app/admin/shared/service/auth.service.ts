import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { FbAuthResponse } from 'src/app/environment/inteface';
import { User } from 'src/app/shared/inteface';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  get token(): string {
    return '';
  }
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}  `,
        user
      )
      .pipe(
        tap(this.setToken),
        catchError(async (error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такой email не существует.');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email.');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль.');
        break;
      default:
        this.error$.next('Произошла ошибка.');
        break;
    }

    return throwError(error);
  }

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(res: any) {
    const expDate = new Date(new Date().getTime());
  }
}
