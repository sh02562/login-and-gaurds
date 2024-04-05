import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = "https://localhost:7036/api/User/";
  constructor(private http: HttpClient) { }
  AUTH_TOKEN = 'auth_token';
  loginUser(data:any) {
    return this.http.post(`${this.baseUrl}authenticate`,data).pipe(catchError(this.errorHandler.bind(this)));
  }
  registerUser(data:any) {
    return this.http.post(`${this.baseUrl}register`,data).pipe(catchError(this.errorHandler.bind(this)));
  }
  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      // auth token delete
      // redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({messages: message, error});
  }

  private getAuthHeader(): { [header: string]: string | string[]; } {
    return {
      Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
    };
  }
}
