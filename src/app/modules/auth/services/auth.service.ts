import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  of,
  Subscription,
  throwError
} from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { AuthModel } from '../models/auth.model';
import { AuthHTTPService } from './auth-http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIResponse } from '../models/api-response.model';

export type UserType = UserModel | undefined;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.authTokenName}`;

  // public fields
  currentUser$: Observable<UserType>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;
  errorMsg: string = '';

  get currentUserValue(): UserType {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserType) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    private http: HttpClient
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }

  ngOnInit(): void {
    setInterval(this.getUserByToken, 1000);
  }

  // public methods
  login(email: string, password: string): Observable<UserType> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(email, password).pipe(
      map((loginResponse) => {
        const token = loginResponse.headers.get('x-auth-token');
        const result = this.setAuthFromLocalStorage(token);
        return result;
      }),
      switchMap(() => this.getUserByToken()),
      catchError((err) => {
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth/login'], {
      queryParams: {}
    });
  }

  getUserByToken(): Observable<UserType> {
    console.log('Get user by token method called ....');
    const token = this.getAuthFromLocalStorage();
    if (!token) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken(token).pipe(
      map((user: UserType) => {
        let loggedinUserData = JSON.parse(JSON.stringify(user?.data));
        if (user?.statusCode === 200) {
          this.currentUserSubject.next(loggedinUserData);
        } else {
          this.logout();
        }
        return loggedinUserData;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // need create new user then login
  registration(user: UserModel): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.createUser(user).pipe(
      map((responseData) => {
        this.isLoadingSubject.next(false);
      }),
      switchMap(() => this.login(user.email, user.password)),
      catchError((err) => {
        if (err.status && err.error.message) {
          this.errorMsg = err.error.message;
          return throwError(this.errorMsg);
        }
        if (err instanceof HttpErrorResponse) {
          if (err.status === 0) {
            return throwError(
              'Unable to Connect to the Server. Please try after sometime.'
            );
          }
        }
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  forgotPassword(email: string): Observable<APIResponse> {
    this.isLoadingSubject.next(true);
    return this.authHttpService
      .forgotPassword(email)
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  // private methods
  setAuthFromLocalStorage(token: any): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (token) {
      localStorage.setItem(this.authLocalStorageToken, token);
      return true;
    }
    return false;
  }

  getAuthFromLocalStorage(): string | undefined {
    try {
      const token = localStorage.getItem(this.authLocalStorageToken);
      if (!token) {
        return undefined;
      }

      return token;
    } catch (error) {
      return undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
