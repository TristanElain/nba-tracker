import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiListResponse, Game, Team } from 'src/app/models';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  public lastTwelveDays(teamId: number): Observable<Game[]> {
    const today = new Date();
    const dateParams: string[] = Array.from({ length: 12 })
      .map((_, index) => {
        const date = new Date();
        date.setDate(today.getDate() - index);
        return date;
      })
      .map(date => format(date, 'yyyy-MM-dd'));

    return this.http
      .get<ApiListResponse<Game[]>>(`${API_BASE_URL}/games`, {
        params: {
          'team_ids[]': teamId,
          'dates[]': dateParams,
          page: 0,
          per_page: 12,
        },
      })
      .pipe(map(({ data }) => data))
      .pipe(
        catchError(err => {
          console.error(err);
          return of([]);
        })
      );
  }

  public getScore(game: Game, team: Team): number {
    if(game.home_team.id === team.id) {
      return game.home_team_score;
    }

    return game.visitor_team_score;
  }

  public getOpposingScore(game: Game, team: Team): number {
    if(game.home_team.id === team.id) {
      return game.visitor_team_score;
    }

    return game.home_team_score;
  }

  public hasWon(game: Game, team: Team): boolean {
    return this.getScore(game, team) > this.getOpposingScore(game, team);

  }
}
