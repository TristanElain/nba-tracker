import { Routes } from '@angular/router';
import { ResultsComponent, TrackerComponent } from '../pages';
import { teamListResolver, teamResolver } from './resolvers';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrackerComponent,
    resolve: { teams: teamListResolver },
  },
  {
    path: 'results/:teamId',
    pathMatch: 'full',
    component: ResultsComponent,
    resolve: { team: teamResolver },
  },
];
