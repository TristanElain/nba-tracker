import { TestBed } from '@angular/core/testing';

import { NbaHeadersInterceptor } from './nba-headers.interceptor';

describe('NbaHeadersInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [NbaHeadersInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: NbaHeadersInterceptor = TestBed.inject(
      NbaHeadersInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
