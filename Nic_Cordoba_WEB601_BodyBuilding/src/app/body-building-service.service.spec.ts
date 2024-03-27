import { TestBed } from '@angular/core/testing';

import { BodyBuildingServiceService } from './body-building-service.service';

describe('BodyBuildingServiceService', () => {
  let service: BodyBuildingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyBuildingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
