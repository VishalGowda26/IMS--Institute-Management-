import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  login(payload: Student): Observable<any> {
    return this._httpClient.post('https://reqres.in/api/login', payload);
  }

  getUSer() {
    return this._httpClient.get('https://reqres.in/api/login');
  }
}
