import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';
import { APIResponse } from '../../models/api-response.model';

const API_USERS_URL = `${environment.apiUrl}/users`;
const API_AUTH_URL = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(email: string, password: string): Observable<any> {
    return this.http.post<AuthModel>(
      `${API_AUTH_URL}`,
      {
        email,
        password
      },
      { observe: 'response' }
    );
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${API_USERS_URL}/forgot-password`, {
      email
    });
  }

  getUserByToken(token: string): Observable<UserModel> {
    // const httpHeaders = new HttpHeaders({
    //   'x-auth-token': token
    // });
    return this.http.get<UserModel>(`${API_USERS_URL}/me`);
  }
}