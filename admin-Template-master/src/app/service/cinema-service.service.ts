import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CinemaModel } from './../model/Cinema';
import { ENDPOINT_URL } from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<CinemaModel[]> {
    return this.http.get<CinemaModel[]>(`${ENDPOINT_URL}/cinema`);
  }

  findOne(id: any): Observable<CinemaModel> {
    return this.http.get<CinemaModel>(`${ENDPOINT_URL}/cinema/${id}`);
  }

  create(cinema: CinemaModel): Observable<CinemaModel> {
    return this.http.post<CinemaModel>(`${ENDPOINT_URL}/cinema`, cinema);
  }

  update(cinema: CinemaModel) {
    return this.http.put(`${ENDPOINT_URL}/cinema`, cinema);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/cinema/${id}`);
  }
}
