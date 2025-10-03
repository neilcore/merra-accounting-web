import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRetroButton } from './v-retro-button';

describe('VRetroButton', () => {
  let component: VRetroButton;
  let fixture: ComponentFixture<VRetroButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VRetroButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VRetroButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
