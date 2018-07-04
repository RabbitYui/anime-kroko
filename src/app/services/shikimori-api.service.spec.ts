import { TestBed, inject } from '@angular/core/testing';

import { ShikimoriApiService } from './shikimori-api.service';

describe('ShikimoriApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShikimoriApiService]
    });
  });

  it('should be created', inject([ShikimoriApiService], (service: ShikimoriApiService) => {
    expect(service).toBeTruthy();
  }));
});
