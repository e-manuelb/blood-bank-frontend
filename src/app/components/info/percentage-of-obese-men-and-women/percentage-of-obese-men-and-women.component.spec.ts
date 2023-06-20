import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfObeseMenAndWomenComponent } from './percentage-of-obese-men-and-women.component';

describe('PercentageOfObeseMenAndWomenComponent', () => {
  let component: PercentageOfObeseMenAndWomenComponent;
  let fixture: ComponentFixture<PercentageOfObeseMenAndWomenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentageOfObeseMenAndWomenComponent]
    });
    fixture = TestBed.createComponent(PercentageOfObeseMenAndWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
