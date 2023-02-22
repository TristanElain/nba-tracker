import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Team } from 'src/app/models';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Team[]> {
    return this.http.get<ApiResponse<Team[]>>(`${API_BASE_URL}/teams`)
      .pipe(map(({data}) => data))
      .pipe(catchError(err => {
        console.error(err);
        return of([]);
    }))
  }

  public get(id: number): Observable<Team | null> {
    return this.http.get<ApiResponse<Team>>(`${API_BASE_URL}/teams/${id}`)
      .pipe(map(({data}) => data))
      .pipe(catchError(err => {
        console.error(err);
        return of(null);
    }))
  }
}
