import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Team } from 'src/app/models';
import { TeamService } from 'src/app/services';

export const teamResolver: ResolveFn<Team | null> = (route, state) => {
  const teamService = inject(TeamService);
  const {teamId} = route.params;
  return teamService.get(teamId);
};
