import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  baseUrl: string = 'https://62b9299dff109cd1dc8ca34f.mockapi.io/students';

  createStudent(payload: Students): Observable<any> {
    return this._httpClient.post(this.baseUrl, payload);
  }
}
