import { TestBed } from '@angular/core/testing';

import { NarrativeRendererService } from './narrative-renderer.service';

describe('NarrativeRendererService', () => {
  let service: NarrativeRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarrativeRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
