import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Team } from 'src/app/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Team[]> {
    return this.http.get<ApiResponse<Team[]>>('https://free-nba.p.rapidapi.com/teams')
      .pipe(map(({data}) => data))
      .pipe(catchError(err => {
        console.error(err);
        return [];
      }))
  }
}
