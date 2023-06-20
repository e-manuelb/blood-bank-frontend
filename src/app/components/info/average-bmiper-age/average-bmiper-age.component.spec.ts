import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBMIPerAgeComponent } from './average-bmiper-age.component';

describe('AverageBMIPerAgeComponent', () => {
  let component: AverageBMIPerAgeComponent;
  let fixture: ComponentFixture<AverageBMIPerAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageBMIPerAgeComponent]
    });
    fixture = TestBed.createComponent(AverageBMIPerAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
