import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = "https://localhost:7036/api/User/";
  constructor(private http: HttpClient) { }
  getUser(data:any) {
    return this.http.post(`${this.baseUrl}authenticate`,data);
  }
}
