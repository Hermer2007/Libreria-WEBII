import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialities } from './specialities';

describe('Specialities', () => {
  let component: Specialities;
  let fixture: ComponentFixture<Specialities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Specialities],
    }).compileComponents();

    fixture = TestBed.createComponent(Specialities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
