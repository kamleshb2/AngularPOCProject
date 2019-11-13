import { TestBed } from '@angular/core/testing';

import { AddDeactivateService } from './add-deactivate.service';

describe('AddDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDeactivateService = TestBed.get(AddDeactivateService);
    expect(service).toBeTruthy();
  });
});
