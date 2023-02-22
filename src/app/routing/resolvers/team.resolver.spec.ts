import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Team } from 'src/app/models/team.model';

import { teamResolver } from './team.resolver';

describe('teamResolver', () => {
  const executeResolver: ResolveFn<Team[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => teamResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
