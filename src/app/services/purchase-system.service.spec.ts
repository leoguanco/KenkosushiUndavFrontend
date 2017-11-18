import { TestBed, inject } from '@angular/core/testing';

import { PurchaseSystemService } from './purchase-system.service';

describe('PurchaseSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseSystemService]
    });
  });

  it('should be created', inject([PurchaseSystemService], (service: PurchaseSystemService) => {
    expect(service).toBeTruthy();
  }));
});
