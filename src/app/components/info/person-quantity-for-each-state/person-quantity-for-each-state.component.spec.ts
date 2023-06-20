import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonQuantityForEachStateComponent } from './person-quantity-for-each-state.component';

describe('PersonQuantityForEachStateComponent', () => {
  let component: PersonQuantityForEachStateComponent;
  let fixture: ComponentFixture<PersonQuantityForEachStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonQuantityForEachStateComponent]
    });
    fixture = TestBed.createComponent(PersonQuantityForEachStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
