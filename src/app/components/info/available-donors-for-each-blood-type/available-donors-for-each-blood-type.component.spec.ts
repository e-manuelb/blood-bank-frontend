import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDonorsForEachBloodTypeComponent } from './available-donors-for-each-blood-type.component';

describe('AvailableDonorsForEachBloodTypeComponent', () => {
  let component: AvailableDonorsForEachBloodTypeComponent;
  let fixture: ComponentFixture<AvailableDonorsForEachBloodTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableDonorsForEachBloodTypeComponent]
    });
    fixture = TestBed.createComponent(AvailableDonorsForEachBloodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
