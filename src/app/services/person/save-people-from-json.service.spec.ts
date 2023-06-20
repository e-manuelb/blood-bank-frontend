import { TestBed } from '@angular/core/testing';

import { SavePeopleFromJSONService } from './save-people-from-json.service';

describe('SavePeopleFromJSONService', () => {
  let service: SavePeopleFromJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePeopleFromJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
