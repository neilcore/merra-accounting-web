import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCard } from './lcard';

describe('LCard', () => {
  let component: LCard;
  let fixture: ComponentFixture<LCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
