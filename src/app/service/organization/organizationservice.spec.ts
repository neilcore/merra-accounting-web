import { TestBed } from '@angular/core/testing';

import { Organizationservice } from './organizationservice';

describe('Organizationservice', () => {
  let service: Organizationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Organizationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
