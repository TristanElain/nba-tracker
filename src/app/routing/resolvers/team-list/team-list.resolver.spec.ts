import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Team } from 'src/app/models/team.model';

import { teamListResolver } from './team-list.resolver';

describe('teamListResolver', () => {
  const executeResolver: ResolveFn<Team[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      teamListResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
