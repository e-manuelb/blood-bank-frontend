import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAgeForEachBloodTypeComponent } from './average-age-for-each-blood-type.component';

describe('AverageAgeForEachBloodTypeComponent', () => {
  let component: AverageAgeForEachBloodTypeComponent;
  let fixture: ComponentFixture<AverageAgeForEachBloodTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageAgeForEachBloodTypeComponent]
    });
    fixture = TestBed.createComponent(AverageAgeForEachBloodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
