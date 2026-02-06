import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuitRaya } from './duit-raya';

describe('DuitRaya', () => {
  let component: DuitRaya;
  let fixture: ComponentFixture<DuitRaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuitRaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuitRaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
