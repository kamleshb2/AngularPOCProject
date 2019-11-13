import { TestBed, async, inject } from '@angular/core/testing';

import { CustomerInfoEntryGuard } from './customer-info-entry.guard';

describe('CustomerInfoEntryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerInfoEntryGuard]
    });
  });

  it('should ...', inject([CustomerInfoEntryGuard], (guard: CustomerInfoEntryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
