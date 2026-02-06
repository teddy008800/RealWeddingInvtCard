import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rsvp } from './rsvp';

describe('Rsvp', () => {
  let component: Rsvp;
  let fixture: ComponentFixture<Rsvp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rsvp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rsvp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
