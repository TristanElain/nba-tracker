import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team/team.service';

export const teamListResolver: ResolveFn<Team[]> = (): Observable<Team[]> => {
  const teamService = inject(TeamService);
  return teamService.getAll();
};
