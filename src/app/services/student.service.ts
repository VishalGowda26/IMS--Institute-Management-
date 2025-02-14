import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  baseUrl: string = 'https://62b9299dff109cd1dc8ca34f.mockapi.io/students';

  createStudent(payload: Students): Observable<any> {
    return this._httpClient.post(this.baseUrl, payload);
  }

  getStudents(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

  getPagedStudents(limit: number, page: number): Observable<any> {
    return this._httpClient.get(
      this.baseUrl + '?limit=' + limit + '&page=' + page
    );
  }

  getSortedStudents(sort: string, order: string): Observable<any> {
    return this._httpClient.get(
      this.baseUrl + '?sortBy=' + sort + '&order=' + order
    );
  }

  getFilteredStudents(word: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + '?filter=' + word);
  }

  getStudent(id: number): Observable<any> {
    return this._httpClient.get(this.baseUrl + '/' + id);
  }

  updateStudent(id: number, payload: Student) {
    return this._httpClient.put(this.baseUrl + '/' + id, payload);
  }
}
